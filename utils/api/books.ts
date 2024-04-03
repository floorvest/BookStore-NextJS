import axios from 'axios';

const BookApi = axios.create({
    baseURL: 'http://bookstoreapi.patranto.my.id',
});

export function getBooks(page = 1, category = 0, query = '') {
    if (category == 0) {
        return BookApi.get(`/books?page=${page}&search=${query}`)
    }
    return BookApi.get(`/books?page=${page}&filter.tags.id=${category}&search=${query}`)
}

export function getCategory() {
    return BookApi.get(`/tag`)
}

export function login(email: string, password: string) {
    return BookApi.post('/auth/login', {
        email,
        password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function register(email: string, password: string, name: string) {
    return BookApi.post('/user/register', {
        email,
        password,
        name
    })
}

export function order(bookId: string, accessToken: string) {
    return BookApi.post('/order', {
            bookId
        },
        { 
            headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
}

export function me(accessToken: string) {
    return BookApi.get('/user/me', {
        headers:{
            'Authorization': `Bearer ${accessToken}`
        }
    })
}