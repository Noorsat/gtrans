import express from 'express';
import { createDeliveryType } from '../controllers/deliveryType.js';

const router = express.Router();

router.post("/", createDeliveryType);

export default router;