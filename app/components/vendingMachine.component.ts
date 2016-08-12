import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import * as Coins from "../services/coin"
import { Product, Initial as Init, CocaCola} from "../services/product"
import getVendingProduct from "../services/productFactory"
import {Cell} from "../services/cell";

export enum VendingMachineSize {
    small = 3,
    medium = 9,
    large = 12
}

@Component({
    selector: 'vending-machine',
    templateUrl: 'app/components/vendingMachine.component.html',
    directives: []
})
export class VendingMachineComponent implements OnInit { 
    @Output() 
    cellChanged = new EventEmitter();

    @Input()
    selectedCell : Cell = null;

    cells : Cell[] = [];

    constructor() {
    }
    
    ngOnInit(): void {
        this.setSize( VendingMachineSize.large );                               
    }

    setSize(givenSize: VendingMachineSize) : void {

        for (let index = 0; index < givenSize; index++) {
            var p = getVendingProduct();            
            this.cells.push(new Cell(p));    
            console.log('created new product');        
        };
    }
    
    select(cell: Cell): void {
        console.log(cell.product.name + " selected");
        cell.sold = false;        
        this.selectedCell = cell;
        console.log('selcted cell' + cell);
        this.cellChanged.emit({
            value: cell
        });
    }

}
