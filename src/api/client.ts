import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://noxer-test.ru/webapp/api',
    headers: {
        'Content-Type': 'application/json',
    },
});
