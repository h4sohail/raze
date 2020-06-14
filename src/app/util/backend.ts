const SEARCH = '/api-v1/search';
const UPDATE = '/api-v1/update';

export class Backend {
    getSearchAPI() {
        return SEARCH;
    }

    getUpdateAPI() {
        return UPDATE;
    }
}
