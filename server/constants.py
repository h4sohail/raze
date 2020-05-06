import os

CONSTANTS = {
    'PORT': os.environ.get('PORT', 3001),
    'ENDPOINT': {
        'UPDATE': '/api-v1/update',
        'SEARCH': '/api-v1/search'
    }
}
