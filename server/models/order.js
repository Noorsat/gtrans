import mongoose, { mongo } from "mongoose";

const orderSchema = mongoose.Schema({
    pointA:String,
    pointB: String,
    type: String,
    weight:Number,
    volume: Number,
    count: Number,
    transportDate:Date,
    acceptedRequest: String
})

const Order = mongoose.model("OrderSchema", orderSchema)

export default Order;