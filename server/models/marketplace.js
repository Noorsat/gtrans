import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const marketplaceSchema = mongoose.Schema({
    from:{
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    totalVolume: {
        type: Number,
        required: true
    },
    totalWeight: {
        type: Number,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    }
}, { timestamps: true })

const Request = mongoose.model("MarketplaceSchema", marketplaceSchema)

export default Request;