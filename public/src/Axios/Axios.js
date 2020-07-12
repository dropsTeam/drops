import axios from 'axios';

const mainHttp = axios.create({
    baseURL: '/api',
    timeout: 2000,
    withCredentials: true
})


export { mainHttp };