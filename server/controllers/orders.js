import Order from './../models/order.js'

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();

        res.status(200).json(orders)
    }catch (error){
        res.status(404).json({message: error.message})
    }
}

export const createOrder = async (req, res) => {
    const order = req.body;

    const newOrder = new Order(order)
    try{
        await newOrder.save()

        res.status(201).json(newOrder)
    }catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateOrder = async (req, res) => {
    const newOrder = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({message: "Order not found..."})

    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, newOrder) 

    res.send(updatedOrder)

}