import express from 'express';
import { createRequest, getRequests, getRequestsByOrder, getRequestsByUserId } from '../controllers/request.js';

const router = express.Router();

router.get("/", getRequests)
router.get("/my", getRequestsByUserId)
router.get("/:id", getRequestsByOrder)
router.post("/", createRequest)

export default router;