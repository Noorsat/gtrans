import User from './../models/user.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Order from '../models/order.js'
import nodemailer from 'nodemailer';
import validator from 'validator';

const createToken = (_id, companyName, phoneNumber, email, id, name, surname, dateOfBirth, secret) => {
    return jwt.sign({_id, companyName, phoneNumber, email, id, name, surname, dateOfBirth}, secret ? secret : process.env.SECRET, {expiresIn: '3d'})
}

export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.login(email.toLowerCase(), password)

        const token = createToken(user._id, user.companyName, user.phoneNumber, user.email, String(user.id), user?.name, user?.surname, user?.dateOfBirth);

        res.status(200).json({email, token, role: user?.role})
    }catch(error){
        res.status(400).json({error: error.message})
    }

} 

export const signupUser = async (req, res) => {
    const {email, password, companyName, phoneNumber, name, surname, dateOfBirth} = req.body;

    try{
        const user = await User.signup(email.toLowerCase(), password, companyName, phoneNumber, name, surname, dateOfBirth)

        const token = createToken(user._id, user.companyName, user.phoneNumber, user.email, String(user.id), user?.name, user?.surname, user?.dateOfBirth);

        res.status(200).json({email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}  

export const likeAdd = async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) return res.status(404).json({meesage:"Пользователь не найден..."})

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                likeCount:user?.likeCount + 1
            }
        }
    )

    res.send(updatedUser)
}

export const unlikeAdd = async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) return res.status(404).json({meesage:"Пользователь не найден..."})

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
            $set: {unlikeCount:user?.unlikeCount + 1}
        }
    )

    res.send(updatedUser)
}

export const forgotPassword = async (req, res) => {
    const {email, password, companyName, phoneNumber} = req.body;

    try{
        const oldUser = await User.findOne({email})
        if (!oldUser){
            return res.status(404).json({message: "Пользователь не существует!"})
        }
        const secret = process.env.SECRET + oldUser?.password;
        const token = createToken(oldUser._id, oldUser.companyName, oldUser.phoneNumber, oldUser.email, String(oldUser?.id), oldUser?.name, oldUser?.surname, oldUser?.dateOfBirth, secret);
        const link = `https://frontend.gtrans.kz/reset/${oldUser?._id}/${token}`
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'itsnursat@gmail.com',
              pass: 'pdlfyedtkldiqrik'
            }
          });
          
          var mailOptions = {
            from: 'itsnursat@gmail.com',
            to: email,
            subject: 'Восстанавление пароля по сайту GTrans',
            text: `Перейдите по ссылке и восстановите пароль от сайта GTrans!
                ${link}   
            `
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            } else {
            }
          });
        res.status(200).json({
            id: oldUser?._id,
            token:token
        })
    }catch(error){
    }
}

export const resetPassword = async (req, res) => {
    const {id, token} = req.params;

    const oldUser = await User.findOne({_id:id})
    if (!oldUser){
        return res.status(404).json({message: "Пользователь не существует!"})
    }
    const secret = process.env.SECRET + oldUser?.password; 
    try{
        const verify = jwt.verify(token, secret);
        res.json({status:verify})
    } catch (e){
        res.status(401).send("Not Verified")
    }
}

export const resetPasswordPost = async (req, res) => {
    const {id, token} = req.params;
    const { password } = req.body;

    const oldUser = await User.findOne({_id:id})
    if (!oldUser){
        return res.status(404).json({message: "Пользователь не существует!"})
    }
    const secret = process.env.SECRET + oldUser?.password; 
    try{
        const verify = jwt.verify(token, secret);
        const encryptedPassword = await bcrypt.hash(password, 10); 
        const user = await User.updateOne(
            {
                _id:id,
            },
            {
                $set:{
                    password:encryptedPassword
                }
            }
        )
        res.json({status:"Password Updated!"})
        //res.render("index", {email:verify.email})
    } catch (e){
        res.status(401).send("Not Verified")
    }
}

export const getAllUsers = async (req, res) => {
    const users = await User.find();

    if (users.length === 0){
        return res.status(404).json({message:"Нету пользователей"})
    }

    return res.status(200).json(users)
}

export const getUserById = async (req, res) => {
    const id = req.params.id;

    const user = await User.findById(id);

    if (!user) return res.status(404).json({message: "Такого пользователя не существует"})

    return res.status(200).json(user);
}

export const createUserByAdmin = async (req, res) => {
    const body = req.body;


    try{
        
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(body.password, salt);

                
            const exists = await User.findOne({email:body.email});

            if (exists){
                throw Error("Этот электронный адрес уже занят");
            }
    
        const user = new User({...body, password: hash})
        
        await user.save();

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'itsnursat@gmail.com',
              pass: 'pdlfyedtkldiqrik'
            }
          });
          
          var mailOptions = {
            from: 'itsnursat@gmail.com',
            to: body.email,
            subject: 'Данные для авторизации на cabinet.gtrans.kz',
            html: `Email: ${body.email} <br>
                   Пароль: ${body.password}     
            `
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            } else {
            }
          });
        
        return res.status(200).json(user);
    }catch (err){
        return res.status(500).json(err);
    }
}