import {Request, Response} from "express";
import {IUser} from "../types/User.type";
import UserModel from "../models/User.model";
import WorkspaceModel from "../models/Workspace.model";

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      name,
      username,
      imageUrl,
      password,
      email
    } = req.body as Pick<IUser, "name" | "username" | "imageUrl" | "password" | "email">;

    const user: IUser = await new UserModel({
      name,
      username,
      imageUrl,
      password,
      email,
      workspaceIDs: [],
    });

    const newUser: IUser = await user.save();
    res.json({message: "new user created", data: newUser});

  } catch (error) {
    throw (error)
  }
}

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await UserModel.find();
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

const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {username, password} = req.body as Pick<IUser, "username" | "password">;
    const user:IUser[] = await UserModel.find({username, password})
      .populate({path: "workspaceIDs"});

    user.length !== 0 ?
      res.json({message: "user found", data: user}) :
      res.json({message: "user not found"});
  } catch(e) {
    throw(e);
  }
}

export {getUsers, addUserToWorkspace, createUser, getWorkspaceMembers, updateOwner, loginUser}