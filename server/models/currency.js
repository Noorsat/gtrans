import mongoose from "mongoose";

const currencySchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    }
})

const Currency = mongoose.model("CurrencySchema", currencySchema);

export default Currency;