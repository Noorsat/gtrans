import myAxios from './axios'

export const getOrders = async () => {
    const response = await myAxios.get("/orders");
    return response
}

export const createOrder = async (body) => {
    const response = await myAxios.post("/orders", body);
    return response;
}

export const acceptRequest = async (body, id) => {
    const response = await myAxios.put("/orders/add/request/"+id, body)
    return response;
} 

export const changeStatusRequest = async (body, id) => {
    const response = await myAxios.put("/orders/status/request/"+id, body)
    return response
}