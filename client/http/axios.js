import axios from 'axios';

const myAxios = axios.create({
    baseURL:"https://backend.gtrans.kz/"
})

export default myAxios;