import axios from 'axios';

export const login = (body) => {
    const response = axios.post("http://localhost:5100/user/login", body);
    return response;
}

export const register = (body) => {
    const response = axios.post("http://localhost:5100/user/signup", body)
    return response;
}

export const companyPutLike = (id) => {
    const response = axios.put("http://localhost:5100/user/like/"+id, {});
    return response;
}

export const companyPutUnlike = (id) => {
    const response = axios.put("http://localhost:5100/user/unlike/"+id, {});
    return response;
}