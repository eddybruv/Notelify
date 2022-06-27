import {IWorkspace} from "../types/Workspace.type";
import {Request, Response} from "express";
import WorkspaceModel from "../models/Workspace.model";

const createWorkspace = async (req: Request, res: Response): Promise<void> => {
  try {
    const {name, logo, ownerID} = req.body as Pick<IWorkspace, 'name' | "logo" | "ownerID">
    const workspace: IWorkspace = await new WorkspaceModel({
      name, logo, ownerID, memberIDs: [ownerID]
    });
    const newWorkspace: IWorkspace = await workspace.save();
    res.status(200).json({message: "new workspace created", data: newWorkspace});

  } catch (error) {
    throw (error);
  }
}

const getWorkspaces = async (req: Request, res: Response): Promise<void> => {
  try {
    const workspaces: IWorkspace[] = await WorkspaceModel.find()
      .populate({path: "ownerID memberIDs", select: "-password"});

    workspaces.length !== 0 ?
      res.json({message: "found", data: workspaces}) :
      res.json({message: "no workspaces"});
  } catch (e) {
    throw(e)
  }
}


export {createWorkspace, getWorkspaces}