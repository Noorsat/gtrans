import axios from 'axios';

export const login = (body) => {
    const response = axios.post("https://backend.gtrans.kz/user/login", body);
    return response;
}

export const register = (body) => {
    const response = axios.post("https://backend.gtrans.kz/user/signup", body)
    return response;
}

export const companyPutLike = (id) => {
    const response = axios.put("https://backend.gtrans.kz/user/like/"+id, {});
    return response;
}

export const companyPutUnlike = (id) => {
    const response = axios.put("https://backend.gtrans.kz/user/unlike/"+id, {});
    return response;
}