import SafePhoneUser from "../models/safePhoneUser.js";
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import multiparty from 'multiparty';

const createToken = (_id, companyName, phoneNumber, email, secret) => {
    return jwt.sign({_id, companyName, phoneNumber, email}, secret ? secret : process.env.SECRET, {expiresIn: '3d'})
}

export const register = async (req, res) => {
    const {email, password, code} = req.body;
    try {
        if (!email || !password){
            throw Error("Все поля должны быть заполнены")
        }

        if (!validator.isEmail(email)){
            throw Error("Email не является допустимым")
        }
    
        if (!validator.isStrongPassword(password)){
            throw Error("Пароль недостаточно надежный")
        }

        const exists = await SafePhoneUser.findOne({email});

        if (exists){
            throw Error("Этот электронный адрес уже занят");
        }


        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt);

        const user = await SafePhoneUser.create({email, password: hash, code})

        const token = createToken(user._id, user.email, user.password, user.code);

        res.status(200).json({email, token})

    }catch (error){
        res.status(400).json({error: error.message})
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;

    try{
        if (!email || !password){
            throw Error("Все поля должны быть заполнены")
        }
    
        const user  = await this.findOne({email});
    
        if (!user){
            throw Error("Неправильный email")
        }

        const match = await bcrypt.compare(password, user.password)

        if (!match){
            throw Error("Неправильный пароль")
        }

        const token = createToken(user._id, user.emails, user.password, user.code);

        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

export const sendEmailPhoto = async (req, res) => {
    let {email} = req.body;

    let form = new multiparty.Form({uploadDir: '../public/images'})

    form.parse(req, function(err, fields, files){
        if (err) return res.send({error: err.message})

        const imagePath = files.image[0].path;
        const imageFileName = imagePath.slice(imagePath.lastIndexOf("\\")+1);
        const imageURL = "https://backend.gtrans.kz/images/" + imageFileName;
        res.status(200).json({imageURL})
    })
    // try{
    //     var transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //           user: 'itsnursat@gmail.com',
    //           pass: 'pdlfyedtkldiqrik'
    //         }
    //       });
          
    //       var mailOptions = {
    //         from: 'itsnursat@gmail.com',
    //         to: email,
    //         subject: 'asda',
    //         text: `adaskmdlak`
    //       };
    //       transporter.sendMail(mailOptions, function(error, info){
    //         if (error) {
    //           console.log(error);
    //         } else {
    //           console.log('Email sent: ' + info.response);
    //         }
    //       });
    //       res.status(200).json({
    //         message:"Email sent: " + email
    //       })
    // }catch (error){
    //     res.status(400).json({error: error.message})
    // }
  

      
}