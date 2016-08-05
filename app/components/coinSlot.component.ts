import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as Coins from "../services/coin";
import { Product, Initial as Init, CocaCola} from "../services/product";
import getVendingProduct from "../services/productFactory";
import { Cell } from "../services/cell";

@Component({
    selector: 'coin-slot',
    templateUrl: 'app/components/coinSlot.component.html',
    directives: []
})
export class CoinSlotComponent implements OnInit { 
    paid:number = 0;
    acceptedCoins: Array<Coins.Coin> = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()]
    
    @Input() 
    selectedCell: Cell;

    constructor() {
    }

    ngOnInit():void {
        this.selectedCell = new Cell(new CocaCola());
    }

    acceptCoin(c:Coins.Coin):void {
        this.paid += c.value;
    }

    canPay():boolean {
        return this.paid < this.selectedCell.product.price;
    }

    pay(): void {
        this.paid -= this.selectedCell.product.price;
    }

}
