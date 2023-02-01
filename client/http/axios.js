import axios from 'axios';

const myAxios = axios.create({
    baseURL:"http://localhost:5100"
})

export default myAxios;