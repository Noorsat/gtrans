import myAxios from './axios';

export const getPrices = async () => {
    const response = await myAxios.get('/prices');
    return response;
}

export const changePrice = async (body) => {
    const response = await myAxios.put('/prices/change', body);
    return response;
}