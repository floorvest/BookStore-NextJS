import axios from 'axios';

const BookApi = axios.create({
    baseURL: 'http://localhost:3001',
});

export default BookApi;