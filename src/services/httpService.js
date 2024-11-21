import axios from 'axios';

export class HttpService {
    constructor(baseURL = 'http://localhost:3001') {
        this.baseUrl = baseURL;
        this.instance = axios.create({ baseURL: this.baseUrl });
    }

    async getAllTrips() {
        const trips = await axios.get(`${this.baseUrl}/trips`).then((response) => {
            return response.data;
        });
        return trips;
    }
}