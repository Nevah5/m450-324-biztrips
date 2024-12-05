export class HttpService {
    constructor(baseURL = 'http://localhost:3001') {
        this.baseUrl = baseURL;
    }

    async getAllTrips() {
        const trips = await fetch(`${this.baseUrl}/trips`).then((res) => res.json());
        return trips;
    }
}