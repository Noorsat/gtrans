import express from 'express';
import { changePrices, createPrice, getPrices } from '../controllers/prices.js';
import validateToken from '../middlewares/validateToken.js';

const router = express.Router();

router.get('/', validateToken, getPrices);
router.put('/change', changePrices);
router.post('/create', createPrice)

export default router;