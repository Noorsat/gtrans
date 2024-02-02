import express from 'express';
import { createProductType } from '../controllers/productType.js';

const router = express.Router();

router.post("/", createProductType);

export default router;