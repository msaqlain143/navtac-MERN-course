import { Router } from "express";
import {
  getUser,
  getLogin,
  getRegister,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/get-user").get(getUser);
router.route("/user-register").post(getRegister);
router.route("/user-login").get(getLogin);
router.route;

export default router;
