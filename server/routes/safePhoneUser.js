import express from 'express';
import { login, register, sendEmailPhoto } from '../controllers/safePhoneUser.js';
import multer from 'multer';
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    } 
})

const upload = multer({storage: storage})

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/send-email-in-error", upload.single('image'), (req, res) => {
    res.send("Image Uploaded")
});

export default router;