import {Request, Response} from "express";
import {IUser} from "../types/User.type";
import UserModel from "../models/User.model";
import WorkspaceModel from "../models/Workspace.model";
require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      name,
      username,
      imageUrl,
      password,
      email
    } = req.body as Pick<IUser, "name" | "username" | "imageUrl" | "password" | "email">;

    const salt = await bcrypt.genSalt(10)

    const checkEmail: IUser[] = await UserModel.find({email});

    if (checkEmail.length > 0) {
      res.json({message: "user with email already exists"}).status(400);
    } else {
      const checkUsername: IUser[] = await UserModel.find({username});
      if (checkUsername.length > 0) {
        res.json({message: "username taken"})
      } else {
        const user: IUser = await new UserModel({
          name,
          username,
          imageUrl,
          password: await bcrypt.hash(password, salt),
          email,
          workspaceIDs: [],
        });

        const newUser: IUser = await user.save();
        const token = jwt.sign({...newUser}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "7 days"})
        res.json({message: "new user created", data: newUser, token});
      }
    }

  } catch (error) {
    console.log("Failed with error:", error)
  }
}



const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {email, password} = req.body as Pick<IUser, "email" | "password">;

    const checkUsername:IUser[] = await UserModel.find({email})

    if(checkUsername.length > 0) {
      const user = checkUsername[0]
      bcrypt.compare(password, user.password)
        .then((match: boolean) => {
          if(match) {
            const token = jwt.sign({...user}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "7 days"} )
            res.json({message: "login successful", data: user, token});
          } else {
            res.json({message: "password incorrect"});
          }
        })
    } else {
      res.status(400).json({message: "user does not exists"})
    }
  } catch(e) {
    throw(e);
  }
}



const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await UserModel.find({});
    res.status(200).json({data: users})
  } catch (error) {
    throw (error);
  }
}

const addUserToWorkspace = async (req: Request, res: Response): Promise<void> => {
  try {
    const {userIDs, _id} = req.body;
    const add = await WorkspaceModel.findByIdAndUpdate({_id}, {memberIDs: [...userIDs]});
  } catch (error) {
    throw (error)
  }
}

const getWorkspaceMembers = async (req: Request, res: Response): Promise<void> => {
  try {
    const workspaceID = req.params.id;
    const users: IUser[] = await UserModel.find({workspaceIDs: workspaceID})
      .populate({path: "workspaceIDs"});

    users.length !== 0 ?
      res.json({message: "found members", data: users}) :
      res.json({message: "no members"});
  } catch (e) {
    throw (e);
  }
}

const updateOwner = async (req: Request, res: Response): Promise<void> => {
  try {
    const {_id, workspaceIDs} = req.body as IUser;
    await UserModel.findOneAndUpdate({_id}, {workspaceIDs});
    const user = UserModel.findById({_id});
    res.status(200).json({message: "user updated", data: user})
  } catch (e) {
    throw(e);
  }
}


export {getUsers, addUserToWorkspace, createUser, getWorkspaceMembers, updateOwner, loginUser}