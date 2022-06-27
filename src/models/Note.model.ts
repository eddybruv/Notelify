import { INote } from "../types/Note.type";
import { model, Schema } from "mongoose";

const NoteSchema: Schema = new Schema(
  {
    header: String,
    content: String,
    userID: { type: Schema.Types.ObjectId, ref: "user" },
    workspaceID: {type: Schema.Types.ObjectId, ref: "workspace"},
    accessType: String,
  },
  {
    timestamps: true,
  }
);

export default model<INote>("note", NoteSchema);
