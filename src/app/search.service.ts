import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) {}
    
    fetchStats() {
        return this.http.get('/api/search');
    }

}
