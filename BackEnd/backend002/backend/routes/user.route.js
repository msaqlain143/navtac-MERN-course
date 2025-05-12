import { Router } from "express";
import {
  delUser,
  registerUser,
  userLogin,
} from "../controllers/user.controller.js";
import m1 from "../middleware/m1.middleware.js";
import m2 from "../middleware/m2.niddleware.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.route("/delete").get(authMiddleware, delUser);
router.route("/register").get(m1, m2, registerUser);
router.route("/login").get(userLogin);

export default router;
