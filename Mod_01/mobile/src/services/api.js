import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.10:3333/', // IP DO SERVIDOR ONDE O BACK-END VAI RODAR.
});

export default api;