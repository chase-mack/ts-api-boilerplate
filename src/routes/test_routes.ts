// if this file gets too large - create services to handle more of the business logic

import { Application, Request, Response } from 'express';
import { TestController } from '../controllers/testController';

export class TestRoutes {

    private test_controller: TestController = new TestController();

    public route(app: Application) {
        app.get('/api/test', (req: Request, res: Response) => {
            this.test_controller.getAll(req, res);
        })

        app.get('/api/test/:id', (req: Request, res: Response) => {
            this.test_controller.getOne(req, res);
        })

        app.post('/api/test', (req: Request, res: Response) => {
            this.test_controller.create(req, res);
        })

        app.put('/api/test/:id', (req: Request, res: Response) => { // must update the entire document with put
            this.test_controller.update(req, res);
        })

        app.delete('/api/test/:id', (req: Request, res: Response) => {
            this.test_controller.delete(req, res);
        })
    }
}