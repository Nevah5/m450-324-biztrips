export class HttpService {
    constructor(baseURL = 'http://localhost:3001') {
        this.baseUrl = baseURL;
    }

    async getAllTrips() {
        const response = await fetch(`${this.baseUrl}/trips`)
        return await response.json();
    }
}