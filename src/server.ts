import express, {Express} from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import UserRoute from "./routes/User.route";
import NoteRoute from "./routes/Note.route";
import WorkspaceRoute from "./routes/Workspace.route";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/user", UserRoute);
app.use("/api/note", NoteRoute);
app.use("/api/workspace", WorkspaceRoute);

// @ts-ignore
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("🆙[DataBase]: Up and running!"))
  .catch((error) => {
    throw(error)
  });

// app.get("*", (_req:Request, res:Response) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });
//
// app.use(express.static(path.join(__dirname, "client", "build")));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`⚡[server]: Server is running on port ${port}`)
});
 