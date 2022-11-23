import express from 'express';
import { login, register, sendEmailPhoto } from '../controllers/safePhoneUser.js';

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/send-email-in-error", sendEmailPhoto);

export default router;