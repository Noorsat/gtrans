import mongoose from "mongoose";

const deliveryType = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    minDays: {
        type: Number,
        required: true
    },
    maxDays: {
        type: Number,
        required: true
    }
})

const DeliveryType = mongoose.model("DeliveryTypeSchema", deliveryType);

export default DeliveryType;