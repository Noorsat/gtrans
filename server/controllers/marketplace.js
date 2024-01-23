import Marketplace from '../models/marketplace.js';
import { jwtDecode } from "jwt-decode";

export const getOrders = async (req, res) => {
    try{
        const orders = await Marketplace.find();

        res.status(200).json({ data: orders.reverse(), message: "Succesfully get all orders" });
    }catch (err){
        res.status(404).json({message: err.message});
    }
}

export const getOrderById = async (req, res) => {
    try {
        const id = req.params.id;

        const order = await Marketplace.findById(id);
    
        res.status(200).json({ message: "Succesfully get order by id", data: order })
    } catch (err){
        res.status(404).json({ message: err.message})
    }
}

export const getMyOrders = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; 

        if (!token){
            res.status(401).json({ message: "No token"});
        }

        const decoded = jwtDecode(token);

        const id = decoded._id;

        const orders = await Marketplace.find({userId: id});

        res.status(200).json({ data: orders.reverse(), message:"Succesfully get my orders"})
    }catch (err){
        res.status(400).json({message: err.message})
    }
}

export const createOrder = async (req, res) => {
    try {
        const body = req.body;

        const token = req.headers.authorization.split(" ")[1]; 

        if (!token){
            res.status(401).json({ message: "No token"});
        }

        const decoded = jwtDecode(token);

        const order = {...body, userId: decoded._id};

        const newOrder = await Marketplace.create(order);

        if (newOrder){
            res.status(201).json({ data: newOrder, message: "Succesfully created order"});
        }else{
            res.status(400).json({ message: "Error" })            
        }
    } catch (err){
        res.status(400).json({message: err.message})
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id;

        const token = req.headers.authorization.split(" ")[1]; 

        if (!token){
            res.status(401).json({ message: "No token"});
        }

        const decoded = jwtDecode(token);

        const userId = decoded._id;

        const order = await Marketplace.findById(id);

        if (!order){
            res.status(404).json({ message: "Order with this id not exists"});
        }

        if (order.userId == userId){
            const response = await Marketplace.findByIdAndDelete(id);

            if (response){
                res.status(204).json({ message: "Succesfully delete order"});
            }
        }else{
            res.status(400).json({ message: "It's not your order"});
        }
    } catch (err){
        res.status(400).json({message: err.meesage})
    }
}