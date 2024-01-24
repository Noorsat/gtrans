import myAxios from './axios'

export const createRequest = async (body) => {
    const response  = await myAxios.post("/requests", body);
    return response;
}

export const getRequests = async () => {
    const response  = await myAxios.get("/requests");
    return response; 
}

export const deleteRequest = async (id,token) => {
    const response = await myAxios.delete(`/requests/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}