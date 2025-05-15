import { Router } from "express";
import { registerOwner } from "../../controllers/owner/Owner.controller.js";

const router = Router();

router.route("/register").post(registerOwner);

export default router;
