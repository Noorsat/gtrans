import axios from 'axios'

export const createRequest = async (body) => {
    const response  = await axios.post("http://localhost:5100/requests", body);
    return response;
}

export const getRequests = async () => {
    const response  = await axios.get("http://localhost:5100/requests");
    return response; 
}
