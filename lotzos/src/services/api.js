import axios from 'axios';

const api = axios.create({
    baseURL: 'https://synchronize-center.com/api/api/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export default api;