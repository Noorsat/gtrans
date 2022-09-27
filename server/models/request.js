import mongoose from "mongoose";

const requestSchema = mongoose.Schema({
    orderID: String,
    company: String,
    price:Number,
    phoneNumber: String,
    comment:String,
})

const Request = mongoose.model("RequestSchema", requestSchema)

export default Request;