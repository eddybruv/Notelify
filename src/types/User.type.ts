import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  password: string;
  workspaceIDs: string[];
}