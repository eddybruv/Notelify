import {Document} from "mongoose";

export interface INote extends Document {
  header: string;
  content: string;
  accessType: string;
  userID: string;
  workspaceID: string;
}