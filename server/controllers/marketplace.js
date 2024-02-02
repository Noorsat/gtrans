import Marketplace from '../models/marketplace.js';
import User from '../models/user.js';
import ProductType from '../models/productType.js';
import DeliveryType from '../models/deliveryType.js';
import { jwtDecode } from "jwt-decode";

const modifyOrders = async (orders) => {
    const modifiedOrders = await Promise.all(orders.map(async order => {
        const userId = order.userId;
        const productId = order.productTypeId;
        const deliveryId = order.deliveryTypeId;
    
        const user = await User.findById(userId);
        const product = await ProductType.findById(productId);
        const delivery = await DeliveryType.find({ "_id": { "$in": deliveryId } })
    
        return {
            ...order,
            user,
            product,
            delivery
        };
    })).then((res) => {
        return res.map(item => {
            return {_id: item._doc._id, from: item._doc.from, to: item._doc.to, length: item._doc.length, width: item._doc.width, height: item._doc.height, volume: item._doc.volume,  weight: item._doc.weight,  count: item._doc.count, totalVolume: item._doc.totalVolume,  totalWeight: item._doc.totalWeight, user: item.user, product: item.product, delivery: item.delivery};
        })
    });

    return modifiedOrders;
}

export const getOrders = async (req, res) => {
    try{
        const { productType, deliveryType, minWeight, maxWeight, minVolume, maxVolume } = req.query;

        const productTypesArray = productType && productType.split(',');
        const deliveryTypesArray = deliveryType && deliveryType.split(',');

        const filter = {}
    
        if (productType){
            filter.productTypeId = { $in: productTypesArray }
        }
        
        if (deliveryTypesArray){
            filter.deliveryTypeId = { $in: deliveryTypesArray }
        }

        if (minWeight && maxWeight){
            filter.totalWeight = { $gte: minWeight, $lte: maxWeight }
        }
  
        if (minVolume && maxVolume){
            filter.totalVolume = { $gte: minVolume, $lte: maxVolume}
        }
        
        const orders = await Marketplace.find(filter);

        const modifiedOrders = await modifyOrders(orders); 

        if (modifiedOrders){
            res.status(200).json({ data: modifiedOrders.reverse(), message: "Succesfully get all orders" });
        }else{
            res.status(400).json({message:"Empty", data:[]})
        }
    }catch (err){
        res.status(404).json({message: err.message});
    }
}

export const getOrderById = async (req, res) => {
    try {
        const id = req.params.id;

        const order = await Marketplace.findById(id);

        const modifiedOrders = await modifyOrders([order]);
    
        res.status(200).json({ message: "Succesfully get order by id", data: modifiedOrders[0] })
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

        const modifiedOrders = await modifyOrders(orders); 

        res.status(200).json({ data: modifiedOrders.reverse(), message:"Succesfully get my orders"})
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

export const getOrderDetails = async (req, res) => {
    try {
        const orders = await Marketplace.find();
        const types = await ProductType.find();
        const deliveryTypes = await DeliveryType.find();

        const totalWeight = [orders?.map((item) => Number(item.totalWeight)).filter(item => !isNaN(item)).sort((a,b) => a - b)[0], orders?.map((item) => Number(item.totalWeight)).filter(item => !isNaN(item)).sort((a,b) => a - b)[orders?.map((item) => Number(item.totalWeight)).filter(item => !isNaN(item)).sort((a,b) => a - b).length - 1]]

        const totalVolume = [orders?.map((item) => Number(item.totalVolume)).filter(item => !isNaN(item)).sort((a,b) => a - b)[0], orders?.map((item) => Number(item.totalVolume)).filter(item => !isNaN(item)).sort((a,b) => a - b)[orders?.map((item) => Number(item.totalVolume)).filter(item => !isNaN(item)).sort((a,b) => a - b).length - 1]]

        const body = [
            {
                title: 'Тип груза',
                items: types
            },
            {
                title: 'Тип доставки',
                items: deliveryTypes
            },
            {
                title: 'Вес',
                items: {
                    min: totalWeight[0],
                    max: totalWeight[1]
                }
            },
            {
                title: 'Объем',
                items: {
                    min: totalVolume[0],
                    max: totalVolume[1]
                }
            },
        ]

        return res.status(200).json(body)
    }catch (error){
        return res.status(404).json({message: error.message})
    }
}