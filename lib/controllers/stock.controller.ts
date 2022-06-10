
import { Request, Response } from 'express';
import { insufficientParameters, successResponse, failureResponse } from '../modules/common/service';
import e = require('express');
import { StockService } from '../modules/stock/stock.service';

export class StockController {

    private stockService: StockService = new StockService();

    public async get_valuation(req: Request, res: Response) {
        console.log(req.body);
        const { symbol } = req.body;
        const data = await this.stockService.getStockPrice(symbol);
        successResponse('get valuation', data, res);
    }

    public async get_search_history(req: Request, res: Response) {
        const data = this.stockService.sample(req.body)
        successResponse('get search history', data, res);
    }
}