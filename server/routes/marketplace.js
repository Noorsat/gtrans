import express from 'express';
import { createOrder, deleteOrder, getMyOrders, getOrderById, getOrderDetails, getOrders } from '../controllers/marketplace.js';

const router = express.Router();

router.get("/", getOrders);
router.get("/my", getMyOrders);
router.get("/details", getOrderDetails)
router.get("/:id", getOrderById)
router.post("/", createOrder);
router.delete("/:id", deleteOrder)

export default router;