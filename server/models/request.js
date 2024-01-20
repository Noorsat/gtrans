import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const requestSchema = mongoose.Schema({
    orderId: {
        type: ObjectId,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    },
    typeOfDelivery: {
        type: String,
        required: true
    },
    daysOfDelivery: {
        type: Number,
        required: true
    },
    priceOfDelivery: {
        type: Number,
        required: true
    }
}, {timestamps: true })

const Request = mongoose.model("RequestSchema", requestSchema)

export default Request;