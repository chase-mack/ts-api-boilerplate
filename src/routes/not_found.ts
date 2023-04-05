// covers all bad routes

import { Application, Request, Response } from 'express';

export class NotFound {
    public route(app: Application) {
        app.all('*', (req: Request, res: Response) => {
            res.status(404).send({error: true, message: "Check your URL please..."})
        })
    }
}