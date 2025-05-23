import { Router } from "express";
import {
  registerOwner,
  verifyOtp,
  resendOtp,
  imageUpload,
  loginUser,
  me,
} from "../../controllers/owner/Owner.controller.js";
import upload from "../../middleware/multer.middleware.js";
import verifyToken from "../../middleware/verifyToken.middleware.js";
const router = Router();

router.route("/register").post(upload.single("profile"), registerOwner);
router.route("/verify-otp").post(verifyOtp);
router.route("/login").post(loginUser);
router.route("/resend-otp").post(resendOtp);
router.route("/me").get(verifyToken, me);
router.route("/upload").post(upload.single("profile"), imageUpload);

export default router;
