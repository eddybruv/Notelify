import {Router} from "express";
import {createUser, addUserToWorkspace, getUsers, getWorkspaceMembers, updateOwner} from "../controllers/User.controller.js";

const router: Router = Router();

router.post("/create-user", createUser);
router.post("/add-to-workspace", addUserToWorkspace);
router.get('/get-users', getUsers);
router.get("/get-workspace-members/:id", getWorkspaceMembers);
router.post("/update-owner", updateOwner);

export default router