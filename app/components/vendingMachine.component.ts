import { Component, OnInit } from '@angular/core';

import * as Coins from "../services/coin"
import { Product, Initial as Init, CocaCola} from "../services/product"
import getVendingProduct from "../services/productFactory"

export enum VendingMachineSize {
    small = 3,
    medium = 9,
    large = 12
}

class Cell {
     constructor(public product: Product){
     }
     stock :number;
     sold : boolean;
}

@Component({
    selector: 'vending-machine',
    templateUrl: 'app/components/vendingMachine.component.html',
    directives: []
})
export class VendingMachineComponent implements OnInit { 
    paid:number = 0;
    //selectedCell: Cell = new Cell(new Init());
    cells : Cell[] = [];

    //acceptedCoins: Array<Coins.Coin> = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()]
    
    constructor() {
        console.log('constructed');
    }
    
    ngOnInit(): void {
        console.log('component start');
        this.setSize( VendingMachineSize.small );                        
    }

    setSize(givenSize: VendingMachineSize) : void {

        for (let index = 0; index < givenSize; index++) {
            //var product = getVendingProduct();
            var p = new CocaCola();
            this.cells.push(new Cell(p));    
            console.log('created new product');        
        };
    }
    
    // canPay():boolean {
    //     return (this.paid - this.selectedCell.product.price) >= 0 ;
    // }

    // select(cell: Cell): void {
    //     cell.sold = false;
    //     this.selectedCell = cell;
    // }

}
