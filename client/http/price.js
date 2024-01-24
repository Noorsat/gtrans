import myAxios from './axios';

export const getPrices = async (token) => {
    const response = await myAxios.get('/prices', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}

export const changePrice = async (body) => {
    const response = await myAxios.put('/prices/change', body);
    return response;
}

export const getCurrency = async () => {
    const response = await myAxios.get('/currency');
    return response;
}