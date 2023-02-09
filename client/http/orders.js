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

export const addTrackerCode = async (body) => {
    const response = await myAxios.put("/orders/tracker/change", body)
    return response;
}

export const removeTrackCode = async (body) => {
    const response = await myAxios.put("/orders/tracker/return", body)
    return response;
}

export const getOrderByTrackCode = async (id) => {
    const response = await myAxios.get("/orders/tracker/"+id);
    return response;
}

export const getOrdersByAccountId = async (id) => {
    const response = await myAxios.get("/orders/account/"+id);
    return response;
}