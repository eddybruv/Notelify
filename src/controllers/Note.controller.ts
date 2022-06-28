import {Request, Response} from "express";
import {INote} from "../types/Note.type";
import NoteModel from "../models/Note.model";

const createNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      header,
      content,
      workspaceID,
      userID,
      accessType
    } = req.body as Pick<INote, "header" | "content" | "accessType" | "userID" | "workspaceID">;

    const note: INote = await new NoteModel({
      header,
      content,
      workspaceID,
      userID,
      accessType
    });

    const newNote: INote = await note.save();
    res.json({message: "new note created", data: newNote});

  } catch (error) {
    throw (error);
  }
}

const getWorkSpaceNotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const workspaceID:string | number = req.params.id;
    const notes: INote[] = await NoteModel.find({workspaceID});

    notes.length !== 0 ?
      res.json({message: "notes found", data: notes}) :
      res.json({message: "no notes for this workspace"});
  } catch (error) {
    throw (error)
  }
}

export {getWorkSpaceNotes, createNote}