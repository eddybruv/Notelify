import {Router} from "express";
import {getWorkSpaceNotes, createNote,} from "../controllers/Note.controller";

const router: Router = Router();

router.get("/get-workspace-notes/:id", getWorkSpaceNotes);
router.post("/create-note", createNote);


export default router