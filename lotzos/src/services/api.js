import axios from 'axios';

const api = axios.create({
    baseURL: 'https://psychic-fiesta-wr6qrww4pqgg2g6jq-8080.app.github.dev/api/v1',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export default api;