import {Router} from "express";
import {createWorkspace, getWorkspaces} from "../controllers/Workspace.controller"

const router: Router = Router();

router.get("/get-workspaces", getWorkspaces);
router.post("/create-workspace", createWorkspace);

export default router;