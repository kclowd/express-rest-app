import { StockController } from '../controllers/stock.controller';
import { Application, Request, Response } from 'express';

export class StockRoutes {

    private stock_controller: StockController = new StockController();

    public route(app: Application) {
        app.get('/api/stock', (req: Request, res: Response) => {
            this.stock_controller.get_valuation(req, res);
        });
        app.get('/api/stock/history', (req: Request, res: Response) => {
            this.stock_controller.get_search_history(req, res);
        });
    }
}