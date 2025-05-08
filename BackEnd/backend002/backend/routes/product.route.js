import { Router } from "express";
import {
  Product,
  registerProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.route("/get-product").get(Product);
router.route("/register-product").post(registerProduct);
router.route("/delete-product").delete(deleteProduct);

export default router;
