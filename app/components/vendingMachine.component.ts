import { Component, OnInit } from '@angular/core';

import * as Coins from "../services/coin"
import { Product, Initial as Init } from "../services/product"
import getVendingProduct from "../services/productFactory"

export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor(public product: Product){
    }
    stock = Array<number>(3)
    sold = Array<boolean>(false)
}

@Component({
    selector: 'vending-machine',
    templateUrl: './vendingMachine.component.html',
    directives: []
})
export class VendingMachineComponent implements OnInit { 
    paid = 0;
    selectedCell = new Cell(new Init());
    cells = Array<Cell>([])

    acceptedCoins: Array<Coins.Coin> = [new Coins.Dime(), new Coins.Quarter(), 
        new Coins.Half(), new Coins.Dollar()]

    function canPay():boolean = {
        return this.paid - this.selectedCell().product.price >= 0)
    }
    
    constructor(public useProductFactory = true) {}
    
    set size(givenSize: VendingMachineSize) {
        this.cells([]);
        
        for (let index = 0; index < givenSize; index++) {
            this.cells.push(new Cell(getVendingProduct()));            
        };
    }
    
    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }
}
