import { IUser } from "../types/User.type";
import { model, Schema } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    name: String,
    username: String,
    password: String,
    email: String,
    imageUrl: String,
    workspaceIDs: [{type: Schema.Types.ObjectId, ref: "workspace"}]
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("user", UserSchema);
