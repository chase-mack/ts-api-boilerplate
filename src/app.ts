import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { DATABASE_NAME, DATABASE_URL } from "./config";
// IMPORT ROUTES
import {TestRoutes} from "./routes/test_routes";
import { NotFound } from "./routes/not_found";

class App {
    public app: express.Application;
    public mongoUrl: string = DATABASE_URL.concat(DATABASE_NAME);

    // CREATE ROUTE INSTANCE
    private test_routes: TestRoutes = new TestRoutes();
    private not_found: NotFound = new NotFound();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        // RUN ROUTE ON CONSTRUCTION
        this.test_routes.route(this.app);
        this.not_found.route(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;