import User from './../models/user.js'
import jwt from 'jsonwebtoken'
import Order from '../models/order.js'

const createToken = (_id, companyName, phoneNumber, email) => {
    return jwt.sign({_id, companyName, phoneNumber, email}, process.env.SECRET, {expiresIn: '3d'})
}

export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.login(email, password)

        const token = createToken(user._id, user.companyName, user.phoneNumber, user.email);

        res.status(200).json({email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }

} 

export const signupUser = async (req, res) => {
    const {email, password, companyName, phoneNumber} = req.body;

    try{
        const user = await User.signup(email, password, companyName, phoneNumber)

        const token = createToken(user._id, user.companyName, user.phoneNumber);

        res.status(200).json({email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}  

export const likeAdd = async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) return res.status(404).json({meesage:"User not found..."})

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

    if (!user) return res.status(404).json({meesage:"User not found..."})

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
            $set: {unlikeCount:user?.unlikeCount + 1}
        }
    )

    res.send(updatedUser)
}