import express from 'express';
import { forgotPassword, likeAdd, loginUser, resetPassword, resetPasswordPost, signupUser, unlikeAdd } from '../controllers/user.js';

const router = express.Router();

//login route
router.post("/login", loginUser)

router.post("/signup", signupUser)

router.put("/like/:id", likeAdd)

router.put("/unlike/:id", unlikeAdd)

router.post("/forgot-password", forgotPassword)

router.get("/reset-password/:id/:token", resetPassword)

router.post("/reset-password/:id/:token", resetPasswordPost)

export default router;