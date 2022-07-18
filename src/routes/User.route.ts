import {Router} from "express";
import auth from "../middleware/auth"
import {
  createUser,
  addUserToWorkspace,
  getUsers,
  getWorkspaceMembers,
  updateOwner,
  loginUser
} from "../controllers/User.controller.js";

const router: Router = Router();

router.post("/create-user", createUser);
router.post("/add-to-workspace", addUserToWorkspace);
router.get('/get-users', getUsers);
router.get("/get-workspace-members/:id", getWorkspaceMembers);
// @ts-ignore
router.post("/update-owner", auth, updateOwner);
router.post("/login", loginUser);

export default router