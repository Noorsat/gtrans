import express from 'express';
import { createOrder, getMyOrders, getOrders } from '../controllers/marketplace.js';

const router = express.Router();

router.get("/", getOrders);
router.get("/my", getMyOrders);
router.post("/", createOrder);

export default router;