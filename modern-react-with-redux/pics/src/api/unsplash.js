import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b92d0602c2d8263494745da5e4a7b35111e2a63a633bea0f631d07b4190bf981'
    }
});