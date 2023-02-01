import express from 'express';
import { getOrders, createOrder, updateOrder, addRequest, changeStatusRequest, changeTrackCode, getOrderByTrackCode, getOrdersByAccountId  } from '../controllers/orders.js';

const router = express.Router();

router.get("/", getOrders)
router.post("/", createOrder)
router.put("/:id", updateOrder)
router.put("/add/request/:id", addRequest)
router.put("/status/request/:id", changeStatusRequest)
router.put("/tracker/change", changeTrackCode)
router.get("/tracker/:trackCode", getOrderByTrackCode)
router.get("/account/:id", getOrdersByAccountId);

export default router;

