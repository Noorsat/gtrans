import express from 'express';
import { getOrders, createOrder, updateOrder  } from '../controllers/orders.js';

const router = express.Router();

router.get("/", getOrders)
router.post("/", createOrder)
router.put("/:id", updateOrder)

export default router;