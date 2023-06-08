import mongoose from "mongoose";

const priceSchema = mongoose.Schema({
    title: String,
    items: {
        from: mongoose.Schema.Types.Mixed,
        to: mongoose.Schema.Types.Mixed,
        hoz: mongoose.Schema.Types.Mixed,
        tnp: mongoose.Schema.Types.Mixed
    }
}, {timestamps: true}) 

const Price = mongoose.model("PriceSchema", priceSchema)

export default Price;