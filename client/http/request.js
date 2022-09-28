import axios from 'axios'

export const createRequest = async (body) => {
    const response  = await axios.post("https://backend.gtrans.kz/requests", body);
    return response;
}

export const getRequests = async () => {
    const response  = await axios.get("https://backend.gtrans.kz/requests");
    return response; 
}
