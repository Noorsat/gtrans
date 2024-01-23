import Currency from '../models/currency.js';
import Request from './../models/request.js'
import { jwtDecode } from "jwt-decode";

export const getRequests = async (req, res) => {
    try {
        const requests = await Request.find();

        const requestsWithCurrency = [];

        for (const request of requests){
            const currency = await Currency.findById(request.currencyId);

            if (currency){
                const mergedCurrency = { ...request, currency: currency.toObject()}
                requestsWithCurrency.push(mergedCurrency);
            }else{
                requestsWithCurrency.push(request);
            }
        }
        
        res.status(200).json(requestsWithCurrency)
    }catch (error){
        res.status(404).json({message: error.message})
    }
}

export const getRequestsByOrder = async (req, res) => {
    try {
        const orderId = req.params.id;

        const requests = await Request.find({ orderId });

        const requestsWithCurrency = [];

        for (const request of requests){
            const currency = await Currency.findById(request.currencyId);

            if (currency){
                const mergedCurrency = { ...request._doc, currency: currency.toObject()}
                requestsWithCurrency.push(mergedCurrency);
            }else{
                requestsWithCurrency.push(request);
            }
        }

        res.status(200).json({ data: requestsWithCurrency, message: "get requests by order id"})
    }catch (err) {
        res.status(400).json({ message: err.message})
    }
}

export const getRequestsByUserId = async (req, res) => {
    try{
        const token = req.headers.authorization.split(" ")[1]; 

        if (!token){
            res.status(401).json({ message: "No token"});
        }

        const decoded = jwtDecode(token);

        const requests = await Request.find({ userId: decoded._id});

        const requestsWithCurrency = [];

        for (const request of requests){
            const currency = await Currency.findById(request.currencyId);

            if (currency){
                const mergedCurrency = { ...request._doc, currency: currency.toObject()}
                requestsWithCurrency.push(mergedCurrency);
            }else{
                requestsWithCurrency.push(request);
            }
        }


        res.status(200).json({ data: requestsWithCurrency, message: "Succesfully get requests by userId"})
    }catch (err){
        res.status(400).json({message: err.message})
    }
}

export const createRequest = async (req, res) => {
    try{
        const body = req.body;

        const token = req.headers.authorization.split(" ")[1]; 

        if (!token){
            res.status(401).json({ message: "No token"});
        }

        const decoded = jwtDecode(token);

        const request = {...body, userId: decoded._id};

        const newRequest = await Request.create(request);

        if (newRequest){
            res.status(201).json({ data: newRequest, message: "Succesfully created request" })
        }else{
            res.status(400).json({ message: "Error"})
        }
    }catch (error) {
        res.status(400).json({message: error.message})
    }
}