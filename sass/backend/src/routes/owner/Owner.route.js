import { Router } from "express";
import { registerOwner } from "../../controllers/owner/Owner.controller.js";

const router = Router();

router.route("/register").get(registerOwner);

export default router;
