import DeliveryType from "../models/deliveryType.js";

export const createDeliveryType = async (req, res) => {
    try{
        const body = req.body;

        const newDeliveryType = await DeliveryType.create(body);

        if (newDeliveryType){
            res.status(201).json({ data: newDeliveryType, message: "Succesfully create delivery type"})
        }
    }catch (err){
        res.status(400).json({message: err.message})
    }
}