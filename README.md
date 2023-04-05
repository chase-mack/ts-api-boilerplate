# Node, Express, MongoDB API with Typescript

This serves as a simple framework for starting new API projects with the above technologies all in Typescript.


## Typescript Usage
Please review the tsconfig.json file to make sure that "baseUrl" and "outDir" are set as needed. Default should be "./src" and "./dist" respectively. **You may need to create a "dist" folder at the root level of the project.**

See tsconfig.json for the skinny.


## Structure
```
.
├── dist                        // this is the output file where JS will be compiled
├── .env                        // you must create an .env for this project - existing ENV is for example only
├── .gitignore                  
├── package.json
├── package-lock.json
├── README.md
├── src                         // this is where the application lives. 
│   ├── controllers             // business logic goes here. services may be added if needed
│   │   └── testController.ts
│   ├── models
│   │   └── testModel.ts        // models are created with mongoose.model()
│   ├── routes
│   │   ├── not_found.ts        // this is a catch-all for bad URLs
│   │   └── test_routes.ts
│   ├── app.ts                  // here is where the application starts
│   ├── config.ts               // this consumes your .env file
│   └── server.ts               // this is the entry point as defined in package.json
└── tsconfig.json
```

## Get Started
- Make sure you have Typescript and ts-node installed
- Set up your MongoDB and .env files
- run npm install
- have fun!