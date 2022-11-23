import mongoose, { Schema } from "mongoose";

const safePhoneUserSchema = new Schema({
    email: {
        type:String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    code: {
        type: String,
        required:true
    }
})

const SafePhoneUser = mongoose.model("SafePhoneUserSchema", safePhoneUserSchema) 

export default SafePhoneUser;