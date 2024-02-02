import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import ordersRoutes from './routes/orders.js'
import requestsRoutes from './routes/requests.js'
import userRoutes from './routes/user.js'
import safePhoneRoutes from './routes/safePhoneUser.js';
import pricesRoutes from './routes/prices.js';
import marketplaceRoutes from './routes/marketplace.js';
import currencyRoutes from './routes/currency.js';
import productTypeRoutes from './routes/productType.js';
import deliveryTypeRoutes from './routes/deliveryType.js';
//import { Client } from 'amocrm-js'

dotenv.config();

const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(bodyParser.json({limit:"60mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"60mb", extended: true}))
app.use("/safe-phone", safePhoneRoutes)
app.use('/orders', ordersRoutes)
app.use('/requests', requestsRoutes)
app.use("/user", userRoutes)
app.use("/prices", pricesRoutes)
app.use("/marketplace", marketplaceRoutes)
app.use("/currency", currencyRoutes)
app.use("/productType", productTypeRoutes);
app.use("/deliveryType", deliveryTypeRoutes);


// const client = new Client({
//     // логин пользователя в портале, где адрес портала domain.amocrm.ru
//     domain: 'gtranskz.amocrm.ru', // может быть указан полный домен вида domain.amocrm.ru, domain.amocrm.com
//     /* 
//       Информация об интеграции (подробности подключения 
//       описаны на https://www.amocrm.ru/developers/content/oauth/step-by-step)
//     */
//     auth: {
//         client_id: '3e0022fb-3caa-412f-baeb-7bd29d94f240', // ID интеграции
//         client_secret: 'AbTydDAeMAGRpwNVsrsSMPJYhWcyFrTlSqtDjKPQlrn9jDoQErs4BnAz66IRS7es', // Секретный ключ
//         redirect_uri: 'https://backend.gtrans.kz/', // Ссылка для перенаправления,
//         state: 'state',
//         server: {
//             // порт, на котором запустится сервер авторизации
//             port: 3000j
//         }
//         /*
//             Необязательный араметр состояния для проверки на корректность. 
//             Используется встроенным сервером авторизации.
//             см. https://www.amocrm.ru/developers/content/oauth/step-by-step#%D0%9F%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-Authorization-code
//         */
//     },
// });

// console.log(client.request.make('GET', '/api/v4/account'))

// const result = await client.request.make('GET', '/api/v4/account');
// возвращает тело ответа 
//console.log(result.response);
// к примеру, HTTP-статус ответа операции
//console.log(result.response.statusCode);

mongoose.set("strictQuery", false);
// mongoose.connect("mongodb+srv://itsnursat:itsnoorsat@cluster0.d6wn9dw.mongodb.net/?retryWrites=true&w=majority", {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// }).then(() => app.listen(5100, () => console.log("Server launched")))


mongoose.connect("mongodb+srv://user:qwerty123@cluster0.bfy5yoo.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => app.listen(5100, () => console.log("Server launched")))

    


 