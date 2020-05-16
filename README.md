## About
This web app tracks your personal statistics for Valorant, currently waiting on Riot Games to release a public API to finish this project.
 
 ## Getting Started

In the root directory of the project...

1. Install node modules `yarn install` or `npm install`.
2. Install Python dependencies `yarn install-requirements` or `npm install-requirements`
2. Start development server `yarn start` or `npm start`.

## File Structure

The back-end is based on [Flask](https://github.com/pallets/flask).
The front-end is based on [Angular](https://angular.io).

The front-end is served on http://localhost:3000/ and the back-end on http://localhost:3001/.

```
.
├── server/ - Flask server that provides API routes
│ ├── constants.py - Defines the constants for the endpoints and port
│ ├── sampleData.py - Contains the sample API request data
│ └── server.py - Configures the Port, HTTP Server and provides API routes
├── src - Angular front-end
│ └── app - Angular main root module
│    ├── app-shell - Angular main components
|    ├── result - Result page component
|    ├── search - Search page component
|    ├── util - Additional classes and methods
│    └── app.module.ts - Angular root module.
└── README.md
```

## Additional Documentation

- Angular Docs - https://angular.io/docs
- Angular Router - https://angular.io/guide/router

- Bootstrap CSS - https://getbootstrap.com/
- Flask - http://flask.pocoo.org/
