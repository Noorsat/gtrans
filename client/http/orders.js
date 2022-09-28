import axios from 'axios'

export const getOrders = async () => {
    const response = await axios.get("https://backend.gtrans.kz/orders");
    return response
}

export const createOrder = async (body) => {
    const response = await axios.post("https://backend.gtrans.kz/orders", body);
    return response;
}

export const acceptRequest = async (body, id) => {
    const response = await axios.put("https://backend.gtrans.kz/orders/add/request/"+id, body)
    return response;
} 

export const changeStatusRequest = async (body, id) => {
    const response = await axios.put("https://backend.gtrans.kz/orders/status/request/"+id, body)
    return response
}