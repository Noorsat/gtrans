import axios from 'axios'

export const getOrders = async () => {
    const response = await axios.get("http://localhost:5100/orders");
    return response
}

export const createOrder = async (body) => {
    const response = await axios.post("http://localhost:5100/orders", body);
    return response;
}

export const acceptRequest = async (body, id) => {
    const response = await axios.put("http://localhost:5100/orders/add/request/"+id, body)
    return response;
} 

export const changeStatusRequest = async (body, id) => {
    const response = await axios.put("http://localhost:5100/orders/status/request/"+id, body)
    return response
}