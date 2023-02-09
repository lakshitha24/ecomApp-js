import express from "express";

const router = express.Router();
import { UserCreateController } from "../controllers/user/user.create.controller";
import { loginUserController } from "../controllers/user/user.login.controller";
import { getUserController } from "../controllers/user/user.get.controller";

router.route("/login").post(loginUserController);
router.route("/create").post(UserCreateController);
router.route("/:userId").get(getUserController);

export default router;
