import axios from 'axios';

const myAxios = axios.create({
    //baseURL:"https://backend.gtrans.kz/"
    baseURL: "http://localhost:5100"
})

export default myAxios; 