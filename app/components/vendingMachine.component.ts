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
    stock :number;
    sold : boolean;
}

@Component({
    selector: 'vending-machine',
    templateUrl: './vendingMachine.component.html',
    directives: []
})
export class VendingMachineComponent implements OnInit { 
    paid:number = 0;
    selectedCell: Cell = new Cell(new Init());
    cells : Cell[] = [];

    acceptedCoins: Array<Coins.Coin> = [new Coins.Dime(), new Coins.Quarter(), 
        new Coins.Half(), new Coins.Dollar()]
    
    constructor(public useProductFactory = true) {
        console.log('constructed');
    }
    
    ngOnInit(): void {
        this.setSize( VendingMachineSize.medium );   
        console.log(this.cells.length);                     
    }

    setSize(givenSize: VendingMachineSize) : void {

        for (let index = 0; index < givenSize; index++) {
            this.cells.push(new Cell(getVendingProduct()));    
            console.log('created new product');        
        };
    }
    
    canPay():boolean {
        return (this.paid - this.selectedCell.product.price) >= 0 ;
    }

    select(cell: Cell): void {
        cell.sold = false;
        this.selectedCell = cell;
    }

}
