import {Document, Schema} from "mongoose";

export interface IWorkspace extends Document {
  name: string;
  logo: string;
  memberIDs: Schema.Types.ObjectId[];
  ownerID: Schema.Types.ObjectId;
}