import express from "express";
const router = express.Router();
import { addOrdersItems } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrdersItems);

export default router;
