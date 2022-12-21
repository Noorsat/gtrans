import express from 'express';
import { login, register, sendEmailPhoto } from '../controllers/safePhoneUser.js';
import multer from 'multer';
import path from 'path';
import nodemailer from 'nodemailer';
import Image from '../models/image.js';

const storage = multer.diskStorage({
    destination:"public",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage, limits: {
    fileSize:1000*1000*5
}}).single("image")

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/send-email-in-error", (req, res) => {
    upload(req, res, (err) => {
        if (err){
            console.log(err);
        }else{
            const newImage = new Image({
                name: req.file.filename,
                image: {
                    data: req.file.file,
                    contentType: 'image/jpg'
                }
            })
            newImage.save()
            var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'itsnursat@gmail.com',
              pass: 'pdlfyedtkldiqrik'
            }
          });
        const email = "itsnursat@gmail.com"
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
        }
    })
})

// router.post("/send-email-in-error", upload.single('image'), (req, res) => {
//     try{
//         var transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//               user: 'itsnursat@gmail.com',
//               pass: 'pdlfyedtkldiqrik'
//             }
//           });
          
//           var mailOptions = {
//             from: 'itsnursat@gmail.com',
//             to: 'itsnursat@gmail.com',
//             subject: 'asda',
//             text: 'sadad',
//             attachments:[
//                 {
//                   fileName: 'index.jpg',
//                   path: req.file.path
//                 }
//               ]
//           };
//           transporter.sendMail(mailOptions, function(error, info){
//             if (error) {
//               console.log(error);
//             } else {
//               console.log('Email sent: ' + info.response);
//             }
//           });
//           res.status(200).json({
//             message:"Email sent: " + email
//           })
//     }catch (error){
//         res.status(400).json({error: error.message})
//     }
// });

export default router;