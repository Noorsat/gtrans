import express from 'express';
import { likeAdd, loginUser, signupUser, unlikeAdd } from '../controllers/user.js';

const router = express.Router();

//login route
router.post("/login", loginUser)

router.post("/signup", signupUser)

router.put("/like/:id", likeAdd)

router.put("/unlike/:id", unlikeAdd)

export default router;