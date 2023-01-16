import express from 'express';
import { getOrders, createOrder, updateOrder, addRequest, changeStatusRequest  } from '../controllers/orders.js';

const router = express.Router();

router.get("/", getOrders)
router.post("/", createOrder)
router.put("/:id", updateOrder)
router.put("/add/request/:id", addRequest)
router.put("/status/request/:id", changeStatusRequest)

export default router;

