import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import ordersRoutes from './routes/orders.js'
import requestsRoutes from './routes/requests.js'
import userRoutes from './routes/user.js'

dotenv.config();

const app = express()

app.use(cors())
app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use('/orders', ordersRoutes)
app.use('/requests', requestsRoutes)
app.use("/user", userRoutes)


mongoose.connect("mongodb://195.49.215.39:27017/?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => app.listen(5100, () => console.log("Server launched")))

    


