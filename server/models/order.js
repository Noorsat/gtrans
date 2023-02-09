import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    pointA:String,
    pointB: String,
    type: String,
    weight:String,
    height:String,
    len:String,
    price: String,
    width: String,
    volume: String,
    count: String,
    transportDate:Date,
    accountId:String,
    trackCode:String,
    individualCode: String,
    comment: String,
    status:{
        type:Number,
        default:0,
    },
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