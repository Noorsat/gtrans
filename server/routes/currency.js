import express from 'express';
import { createCurrency, getCurrency } from '../controllers/currency.js';

const router = express.Router();

router.get("/", getCurrency);
router.post("/", createCurrency)

export default router;