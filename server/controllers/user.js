import User from './../models/user.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Order from '../models/order.js'
import nodemailer from 'nodemailer';

const createToken = (_id, companyName, phoneNumber, email, secret) => {
    return jwt.sign({_id, companyName, phoneNumber, email}, secret ? secret : process.env.SECRET, {expiresIn: '3d'})
}

export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.login(email.toLowerCase(), password)

        const token = createToken(user._id, user.companyName, user.phoneNumber, user.email);

        res.status(200).json({email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }

} 

export const signupUser = async (req, res) => {
    const {email, password, companyName, phoneNumber} = req.body;

    try{
        const user = await User.signup(email.toLowerCase(), password, companyName, phoneNumber)

        const token = createToken(user._id, user.companyName, user.phoneNumber);

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
        const token = createToken(oldUser._id, oldUser.companyName, oldUser.phoneNumber, oldUser.email, secret);
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
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
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