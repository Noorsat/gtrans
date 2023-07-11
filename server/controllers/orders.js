import User from '../models/user.js';
import Order from './../models/order.js';
import nodemailer from 'nodemailer';

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();

        res.status(200).json(orders.reverse())
    }catch (error){
        res.status(404).json({message: error.message})
    }
}

export const createOrder = async (req, res) => {
    const order = req.body;

    const user = await User.findById(order[0].accountId)

    await Order.insertMany(order).then(function() {
        var transporter = nodemailer.createTransport({
            service: 'srv-plesk09.ps.kz',
            port: 993, 
            secure:'true',
            auth: {
              user: 'info@gtrans.kz',
              pass: 'codmeh-fiwBox-kykge1'
            },
          });
          
          var mailOptions = {
            from: 'info@gtrans.kz',
            to: 'itsnursat@gmail.com',
            
            subject: 'Новый заказ',
            html: `
                <div>
                    <div style="text-align: center; font-weight:700; font-size: 20px; margin-bottom:20px">
                        Поступил новый заказ
                    </div>
                    <div style="text-align: center; font-weight:700; font-size: 20px; margin-bottom:20px">
                        Данные этого заказа
                    </div>
                    <div>
                        <table border="1">
                            <tr> 
                                <td>
                                    Наименование груза
                                </td>
                                <td>
                                    Вес одной коробки (кг)
                                </td>
                                <td>
                                    Длина одной коробки (м)
                                </td>
                                <td>
                                    Ширина одной коробки (м)
                                </td>
                                <td>
                                    Высота одной коробки (м)
                                </td>
                                <td>
                                    Количество коробок
                                </td>
                                <td>
                                    Комментарии
                                </td>
                                <td>
                                    Цена
                                </td>
                            </tr>
                            ${
                                order?.map((item) => (
                                    `
                                    <tr> 
                                        <td>
                                            ${item?.type}
                                        </td>
                                        <td>
                                            ${item?.weight}
                                        </td>
                                        <td>
                                            ${item?.len}
                                        </td>
                                        <td>
                                           ${item?.width}
                                        </td>
                                        <td>
                                            ${item?.height}
                                        </td>
                                        <td>
                                            ${item?.count}
                                        </td>
                                        <td>
                                            ${item?.comment}
                                        </td>
                                        <td>
                                            ${item?.price}
                                        </td>
                                    </tr>
                                    `
                                ))
                            }
                        </table>
                    </div>
                    <div style="text-align: center; font-weight:700; font-size: 20px; margin-bottom:20px">
                        Данные клиента
                    </div>
                    <div>
                        Email: ${user?.email}
                    </div>
                    <div>
                        Контакты: ${user?.phoneNumber}
                    </div>
                </div>
            `
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error)
            } else {
                console.log('success')
                return res.status(200).json(orders);
            }
          });
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

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'itsnursat@gmail.com',
          pass: 'pdlfyedtkldiqrik'
        }
      });
      
      var mailOptions = {
        from: 'itsnursat@gmail.com',
        to: req?.body?.email,
        subject: 'Ваш заказ прибыл в Алмату | GTrans',
        text: `Ваш заказ по коду ${req.body.individualCode} уже в Алмате. Вы можете связаться с нами по номеру: +7 (727) 333 70 50` 
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        } else {
            console.log('send')
            return res.status(200).json(orders);
        }
      });
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

    return res.status(200).json(orders);

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

    return res.status(200).json(orders.reverse())
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

export const changeInfoByAdmin = async (req, res) => {
    const { accountId, orderId} = req.body;
    
    const user = await User.findById(accountId)

    console.log(user)

    if (user?.role !== "admin" && user?.role !== "superadmin"){
        return res.status(400).json({
            error: true,
            message: 'У вас нету доступа менять заказ'
        })
    }

    const order = await Order.findById(orderId)

    if (!order){
        return res.status(404).json({
            error: true,
            message: 'Заказ не существует'
        })
    }

    await Order.updateOne({_id: orderId}, {
        $set: {
            type: req.body.type,
            trackCode: req.body.trackCode,
            deliveryType: req.body.deliveryType,
            weight: req.body.weight,
            len: req.body.len,
            width: req.body.width,
            height: req.body.height,
            count: req.body.count,
            comment: req.body.comment,
            individualCode: req.body.individualCode,
            price: req.body.price
        }
    })

    return res.status(200).json({
        success: true,
        message: 'Успешно поменяли заказ',
    })
}