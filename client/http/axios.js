import axios from 'axios';

const myAxios = axios.create({
    // baseURL: "https://gtrans-ffxd.onrender.com/"
    baseURL: "http://localhost:5100/"
})

export default myAxios; 