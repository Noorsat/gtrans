import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import ordersRoutes from './routes/orders.js'
import requestsRoutes from './routes/requests.js'

const app = express()

app.use('/orders', ordersRoutes)
app.use('/requests', requestsRoutes)
app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors())

mongoose.connect("mongodb+srv://user:qwerty123@cluster0.bfy5yoo.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => app.listen(5100, () => console.log("Server launched")))

    


