import mongoose, { mongo } from "mongoose";

const orderSchema = mongoose.Schema({
    pointA:String,
    pointB: String,
    type: String,
    weight:Number,
    volume: Number,
    count: Number,
    transportDate:Date,
    accountId:String,
    acceptedRequest: [{
        requestId: String,
        company: String,
        price:Number,
        phoneNumber: String,
        comment:String,
        status: Number 
    }]
}, {timestamps: true })
const Order = mongoose.model("OrderSchema", orderSchema)

export default Order;