import * as axios from 'axios';
import { message } from 'antd';


const mainHttp = axios.create({
    baseURL: '/api',
    timeout: 3000,
    withCredentials: true
});

mainHttp.interceptors.request.use((config) => {

    return config;
}, (error) => {
    return Promise.reject(error);
});

mainHttp.interceptors.response.use((response) => {
    
    if (response.config.method === 'post') {
        if (response.status === 200) {
            message.success('Done !!');
        }
    }
    else if (response.config.method === 'delete') {
        if (response.status === 200) {
            message.success('Successfully Removed !!');
        }
    }
    if (response.config.method === 'put') {
        if (response.status === 200) {
            message.success('Successfully edited !!');
        }
    }
    return response;
}, (error) => {
    console.log(error)
    if (error.response.status === 400) {
        message.error(error.response.data.msg);
    }
    return Promise.reject(error.message);
});

export { mainHttp };