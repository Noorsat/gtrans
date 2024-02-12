import axios from 'axios';

const myAxios = axios.create({
    baseURL: "http://localhost:5100/"
    // baseURL: "https://gtrans-ffxd.onrender.com/"
})

export default myAxios; 