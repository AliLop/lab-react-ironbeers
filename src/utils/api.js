import axios from 'axios';

class BeersService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_BEERS_API}`
        });
        this.service = service;
    }
    getAll() {
        return this.service.get('/');
    }
    getBeer(id) {
        return this.service.get(`/${id}`)
    }
    getRandomBeer() {
        return this.service.get('/random')
    }
    addBeer(beer) {
        return this.service.post('/new', beer);
    }
    searchBeer(query) {
        return this.service.get(`/search?q=${query}`);
    }
}
export default BeersService;