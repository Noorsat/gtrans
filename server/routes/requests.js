import express from 'express';
import { createRequest, getRequests, getRequestsByOrder } from '../controllers/request.js';

const router = express.Router();

router.get("/", getRequests)
router.get("/:id", getRequestsByOrder)
router.post("/", createRequest)

export default router;