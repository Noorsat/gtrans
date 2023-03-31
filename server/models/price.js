import mongoose from "mongoose";

const priceSchema = mongoose.Schema({
    hoz: {
        more1000: Number,
        more800Less1000: Number,
        more600Less800: Number,
        more400Less600: Number,
        more350Less400: Number,
        more300Less350: Number,
        more250Less300: Number,
        more200Less250: Number,
        more190Less200: Number,
        more180Less190: Number, 
        more170Less180: Number,
        more160Less170: Number,
        more150Less160: Number,
        more140Less150: Number,
        more130Less140: Number,
        more120Less130: Number,
        more110Less120: Number,
        more100Less110: Number,
        less100: Number
    },
    tnp: {
        more1000: Number,
        more800Less1000: Number,
        more600Less800: Number,
        more400Less600: Number,
        more350Less400: Number,
        more300Less350: Number,
        more250Less300: Number,
        more200Less250: Number,
        more190Less200: Number,
        more180Less190: Number, 
        more170Less180: Number,
        more160Less170: Number,
        more150Less160: Number,
        more140Less150: Number,
        more130Less140: Number,
        more120Less130: Number,
        more110Less120: Number,
        more100Less110: Number,
        less100: Number
    }
}, {timestamps: true}) 

const Price = mongoose.model("PriceSchema", priceSchema)

export default Price;