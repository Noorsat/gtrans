import express from 'express';
import { createRequest, deleteRequest, getRequests, getRequestsByOrder, getRequestsByUserId } from '../controllers/request.js';

const router = express.Router();

router.get("/", getRequests)
router.get("/my", getRequestsByUserId)
router.get("/:id", getRequestsByOrder)
router.delete("/:id", deleteRequest)
router.post("/", createRequest)

export default router;