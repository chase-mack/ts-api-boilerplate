# Node, Express, MongoDB API with Typescript

This serves as a simple framework for starting new API projects with the above technologies all in Typescript.


## Typescript Usage
Please review the tsconfig.json file to make sure that "baseUrl" and "outDir" are set as needed. Default should be "./src" and "./dist" respectively. **You may need to create a "dist" folder at the root level of the project.**

See tsconfig.json for the skinny.


## Structure
```
.
├── dist                        // this is the output file where JS will be compiled
├── node_modules
├── .env                        // you must create an .env for this project - existing ENV is for example only
├── .gitignore                  
├── package.json
├── package-lock.json
├── README.md
├── src                         // this is where the application lives. 
│   ├── controllers             // business logic goes here. services may be added if needed
│   │   └── testController.ts
│   ├── models
│   │   └── testSchema.ts      // this is what Mongoose uses to choose collection within specified database
│   │   └── testModel.ts       // this is an interface used to perform business logic on data
│   ├── routes
│   │   ├── not_found.ts        // this is a catch-all for bad URLs
│   │   └── test_routes.ts
│   ├── app.ts                  // here is where the application starts
│   ├── config.ts               // this consumes your .env file
│   └── server.ts               // this is the entry point as defined in package.json
├── tsconfig.json
├── jest.config.js              // required to configure jest and typescript
└── tests                       // jest and supertest to test API endpoints

```

## Get Started
- Make sure you have Typescript and ts-node installed
- Set up your MongoDB and .env files
- create "dist" folder at root level
- run npm install
- have fun!


## TODO:
- source validation (see testController.ts for start)
    - validate through API key in header
    - will need to update and rotate API key to keep secure
    - it would be a good idea to use Authentication (username, password) for GET, UPDATE, and DELETE requests
- unit testing
    - create unitTest collection on mongodb?
    - use this data to test GET, POST, etc with supertest
