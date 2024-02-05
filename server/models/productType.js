import mongoose from "mongoose";

const productType = mongoose.Schema({
    type: {
        type: String,
        required: true
    }
})

const ProductType = mongoose.model("ProductTypeSchema", productType);

export default ProductType;