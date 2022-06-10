import { Application, Request, Response } from 'express';
import { RedCircleController } from '../controllers/red-circle.controller';

export class RedCircleRoutes {

    private redCircle_controller: RedCircleController = new RedCircleController();

    public route(app: Application) {
        app.get('/api/redcircle/test', (req: Request, res: Response) => {
            this.redCircle_controller.test_get(req, res);
        });
        app.post('/api/redcircle/test', (req: Request, res: Response) => {
            this.redCircle_controller.test_post(req, res);
        });
    }
}