import fetch from 'node-fetch';
import { ValuationModel } from "./stock.model";

export class StockService {
    // Add service functions here for handling logic
    public sample(data: any): any {
        return data;
    }

    public async getStockPrice(symbol: string): Promise<ValuationModel> {
        // Fetch data from 3rd party API
        const stockDetails = await this.getStockDetails(symbol);
        console.log(stockDetails);
        return new ValuationModel(symbol, 0);
    }

    private async getStockDetails(symbol: string): Promise<any> {
        const data = await fetch(`https://redcircle-stock-api.herokuapp.com/v1/stock?symbol=${symbol}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        })
            .then(res => res.json())
            // .then(json => json[0]);

        return data;
    }
}