export class ValuationModel {
    symbol: string
    price: number

    constructor(symbol: string, price: number) {
        this.symbol = symbol;
        this.price = price;
    }
}