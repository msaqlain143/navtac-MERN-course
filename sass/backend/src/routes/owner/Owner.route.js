import { Router } from "express";
import {
  registerOwner,
  verifyOtp,
  resendOtp,
  imageUpload,
  loginUser,
  me,
  refresh,
  logout,
  addPrincipal,
} from "../../controllers/owner/Owner.controller.js";
import upload from "../../middleware/multer.middleware.js";
import verifyToken from "../../middleware/verifyToken.middleware.js";
import isAllow from "../../middleware/isAllow.middleware.js";
const router = Router();

router.route("/register").post(upload.single("profile"), registerOwner);
router.route("/verify-otp").post(verifyOtp);
router.route("/login").post(loginUser);
router.route("/resend-otp").post(resendOtp);
router.route("/me").get(verifyToken, me);
router.route("/upload").post(upload.single("profile"), imageUpload);
router.route("/refresh").get(refresh);
router.route("/logout").get(verifyToken, logout);
router
  .route("/add-principal")
  .post(verifyToken, isAllow("OWNER"), addPrincipal); //["OWNER" ,  "TEACHER"]

export default router;
