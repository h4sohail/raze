const SEARCH: string = '/api-v1/search';
const UPDATE: string = '/api-v1/update';

export class Backend{
    getSearchAPI(){
        return SEARCH;
    }
    
    getUpdateAPI(){
        return UPDATE;
    }
}