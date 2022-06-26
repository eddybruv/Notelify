import { IUser } from "../types/User.type";
import { model, Schema } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    name: String,
    username: String,
    password: String,
    email: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("user", UserSchema);