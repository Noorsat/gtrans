import axios from 'axios';

const myAxios = axios.create({
    baseURL: "https://gtrans-ffxd.onrender.com/"
})

export default myAxios; 