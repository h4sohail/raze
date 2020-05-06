import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Backend } from './util/backend';

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) {}
    
    fetchStats() {
        let backend = new Backend
        return this.http.get(backend.getSearchAPI());
    }
}