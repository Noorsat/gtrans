import Currency from "../models/currency.js";

export const getCurrency = async (req, res) => {
    try {
        const currency = await Currency.find();

        res.status(200).json({ data: currency, message: "Succesfully get currency" })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createCurrency = async (req, res) => {
    try {
        const currency = req.body;

        const response = await Currency.create(currency);

        if (response){
            res.status(201).json({ data: response, message: "Succesfully created currency" })
        }
    } catch (err){
        res.status(404).json({ message: err.message })
    }
}