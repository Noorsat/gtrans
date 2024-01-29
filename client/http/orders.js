import myAxios from './axios'

export const getOrders = async (params = '') => {
    const response = await myAxios.get("/orders" + params);
    return response
}

export const getMyOrders = async (token) => {
    const response = await myAxios.get('/orders/my', {
        headers: {
            Authorization: `Bearer ${token}`,
          },
    })
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
    const response = await myAxios.put("/orders/tracker/accept/china", body)
    return response;
}

export const acceptProduct = async (body) => {
    const response = await myAxios.put("/orders/tracker/accept", body)
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

export const getOrderById = async (id) => {
    const response = await myAxios.get("/orders/"+id);
    return response;
}

export const changePriceByAdmin = async (id, body) => {
    const response = await myAxios.put('/orders/price/'+id, body);
    return response;
}

export const changeTrackCode = async (body) => {
    const response = await myAxios.put('/orders/tracker/change', body);
    return response;
}

export const updateOrder = async (body) => {
    const response = await myAxios.put('/orders/', body);
    return response;
}

export const getDetails = async () => {
    const response = await myAxios.get("/orders/details")
    return response;
}