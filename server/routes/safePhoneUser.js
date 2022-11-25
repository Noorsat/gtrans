import express from 'express';
import { login, register, sendEmailPhoto } from '../controllers/safePhoneUser.js';
import multer from 'multer';
import path from 'path';
import nodemailer from 'nodemailer';

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
    try{
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'itsnursat@gmail.com',
              pass: 'pdlfyedtkldiqrik'
            }
          });
          
          var mailOptions = {
            from: 'itsnursat@gmail.com',
            to: 'itsnursat@gmail.com',
            subject: 'asda',
            text: 'sadad',
            attachments:[
                {
                  fileName: 'index.jpg',
                  path: req.file.path
                }
              ]
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          res.status(200).json({
            message:"Email sent: " + email
          })
    }catch (error){
        res.status(400).json({error: error.message})
    }
});

export default router;