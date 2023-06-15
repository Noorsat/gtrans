import myAxios from './axios';
import loadCustomRoutes from 'next/dist/lib/load-custom-routes';

export const login = (body) => {
    const response = myAxios.post("/user/login", body);
    return response;
}

export const register = (body) => {
    const response = myAxios.post("/user/signup", body)
    return response;
}

export const companyPutLike = (id) => {
    const response = myAxios.put("/user/like/"+id, {});
    return response;
}

export const companyPutUnlike = (id) => {
    const response = myAxios.put("/user/unlike/"+id, {});
    return response;
}

export const forgotPassword = (body) => {
    const response = myAxios.post("user/forgot-password", body)
    return response;
}

export const getResetPassword = (id, token) => {
    const response = myAxios.get("/user/reset-password/"+id+"/"+token);
    return response;
}

export const postResetPassword = (id,token,body) => {
    const response = myAxios.post("/user/reset-password/"+id+"/"+token, body);
    return response;
}

export const getAllUsers = () => {
    const response = myAxios.get("/user/all");
    return response;
}

export const getUserById = (id) => {
    const response = myAxios.get("/user/"+id);
    return response;
}

export const signupUserByAdmin = (body) => {
    const response = myAxios.post("/user/admin/signup", body);
    return response;
}

export const changeRoleToAdmin = (body, role) => {
    const response = myAxios.put(`/user/role/${role}`, body);
    return response;
}