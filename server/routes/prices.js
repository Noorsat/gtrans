import express from 'express';
import { changePrices, createPrice, getPrices } from '../controllers/prices.js';

const router = express.Router();

router.get('/', getPrices);
router.put('/change/:id', changePrices);
router.post('/create', createPrice)

export default router;