import {model, Schema} from "mongoose";
import {IWorkspace} from "../types/Workspace.type";

const  WorkspaceSchema: Schema = new Schema(
  {
    name: String,
    ownerID: {type: Schema.Types.ObjectId, ref: "user"},
    memberIDs: [{type: Schema.Types.ObjectId, ref: "user"}],
    logo: String,
  },
  {
    timestamps: true
  }
);

export default model<IWorkspace>("workspace", WorkspaceSchema);