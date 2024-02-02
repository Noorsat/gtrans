import ProductType from "../models/productType.js";

export const createProductType = async (req, res) => {
    try{
        const body = req.body;

        const newProductType = await ProductType.create(body);

        if (newProductType){
            res.status(201).json({ data: newProductType, message: "Succesfully create product type"})
        }
    }catch (err){
        res.status(400).json({message: err.message})
    }
}