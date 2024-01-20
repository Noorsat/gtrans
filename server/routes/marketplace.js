import express from 'express';
import { createOrder, getMyOrders, getOrderById, getOrders } from '../controllers/marketplace.js';

const router = express.Router();

router.get("/", getOrders);
router.get("/my", getMyOrders);
router.get("/:id", getOrderById)
router.post("/", createOrder);

export default router;