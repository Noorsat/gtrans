import User from '../models/user.js';
import Order from './../models/order.js';
import nodemailer from 'nodemailer';

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

    await Order.insertMany(order).then(function() {
        res.status(201).json(order)
    }).catch(function(error) {
        res.status(409).json({message: error.message})
    });
}

export const updateOrder = async (req, res) => {
    const newOrder = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({message: "Order not found..."})

    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, newOrder) 

    res.send(updatedOrder)
}

export const addRequest = async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({message: "Order not found..."})

    const newOrder = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
        $push:{
            acceptedRequest: newOrder
        }
    })

    res.send(updatedOrder)
}

export const changeStatusRequest = async (req, res ) => {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({message: "Order not found..."})

    const newOrder = req.body;


    const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        { $set: { "acceptedRequest.$[elem].status" : newOrder.status } },
        {
          multi: true,
          arrayFilters: [ { "elem.requestId":newOrder.requestId } ]
        }
    )

    res.send(updatedOrder)
}

export const changeTrackCode = async (req, res) => {
    const order = await Order.find({individualCode: req.body.individualCode});

    if (order.length === 0) return res.status(404).json({message: "Order not found..."})

    let orders = await Order.updateMany({  
            individualCode: req.body.individualCode
        },
        {
            $set: {
                trackCode: req.body.trackCode
            }
        }
    )

    res.status(200).send(orders);
}

export const acceptChina = async (req, res) => {
    const order = await Order.find({individualCode: req.body.individualCode});

    if (order.length === 0) return res.status(404).json({message: "Order not found..."})

    let orders = await Order.updateMany({  
            individualCode: req.body.individualCode
        },
        {
            $set: {
                status: 1
            }
        }
    )

    res.status(200).send(orders);
}

export const acceptProduct = async (req, res) => {
    const order = await Order.find({individualCode: req.body.individualCode});

    if (order.length === 0) return res.status(404).json({message: "Order not found..."})

    let orders = await Order.updateMany({  
            individualCode: req.body.individualCode
        },
        {
            $set: {
                status:2,
            }
        }
    )

    res.status(200).send(orders);
} 

export const switchTrackCode = async (req, res) => {
    const order = await Order.find({individualCode: req.body.individualCode});

    if (order.length === 0) return res.status(404).json({message: "Order not found..."})

    let orders = await Order.updateMany({  
            individualCode: req.body.individualCode
        },
        {
            $set: {
                status: req.body.status
            }
        }
    )

    res.status(200).send(orders);
}

export const getOrderByTrackCode = async (req, res) => {
    const order = await Order.find({trackCode: req.params.trackCode});

    if (order.length === 0){
        return res.status(404).json({message:'Такого кода не существует'})
    }else{
        return res.status(200).json(order);
    }
}

export const getOrdersByAccountId = async (req, res) => {
    const id = req.params.id;

    const orders = await Order.find({accountId:id});

    if (orders.length === 0) return res.status(404).json({message: "У этого пользователя нету заказов"})

    return res.status(200).json(orders)
}

export const getOrderById = async (req, res) => {
    const id = req.params.id;

    const order = await Order.findById(id);

    if (!order){
       return res.status(404).json({message:'Такой заказ не существует'})
    }

    return res.status(200).json(order);
}

export const changePriceByAdmin = async (req, res) => {
    const id = req.params.id;

    const order = await Order.find({individualCode: id});

    if (order.length === 0) return res.status(404).json({message: "Заказ не найден"})

    let orders = await Order.updateMany({  
        individualCode: id
    },
    {
        $set: {
            price: req.body.price
        }
    })

    let owner = await User.findById(order[0].accountId);

    if (!owner) return res.status(404).json({message: 'Нету такого пользователя'});
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'itsnursat@gmail.com',
          pass: 'pdlfyedtkldiqrik'
        }
      });
      
      var mailOptions = {
        from: 'itsnursat@gmail.com',
        to: owner?.email,
        subject: 'Изменение по вашему заказку | GTrans',
        text: `Вашу заявку посмотрели наши менеджеры и поменяли цену на: ${req.body.price} $. Вы можете связаться с нами по номеру: +7 (727) 333 70 50` 
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        } else {
            
            return res.status(200).json(orders);
        }
      });

} 