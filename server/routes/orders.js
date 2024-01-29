import express from 'express';
import { getOrders, createOrder, updateOrder, addRequest, changeStatusRequest, changeTrackCode, getOrderByTrackCode, getOrdersByAccountId, switchTrackCode, getOrderById, acceptProduct, acceptChina, changePriceByAdmin, changeInfoByAdmin, getOrderDetails, getMyOrders } from '../controllers/orders.js';

const router = express.Router();

router.get("/", getOrders)
router.get("/my", getMyOrders)
router.post("/", createOrder)
router.get('/details', getOrderDetails)
router.put("/", changeInfoByAdmin)
router.put("/add/request/:id", addRequest)
router.put("/status/request/:id", changeStatusRequest)
router.put("/tracker/change", changeTrackCode)
router.put("/tracker/accept/china", acceptChina)
router.put("/tracker/accept", acceptProduct)
router.put("/tracker/return", switchTrackCode)
router.get("/tracker/:trackCode", getOrderByTrackCode)
router.get("/account/:id", getOrdersByAccountId)
router.get("/:id", getOrderById)
router.put("/price/:id", changePriceByAdmin)


export default router;

