import { Component } from '@angular/core';

import {VendingMachineComponent} from './components/vendingMachine.component';
import {CoinSlotComponent} from './components/coinSlot.component';

import { Product, Cashews} from "./services/product";
import { Cell } from "./services/cell";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [VendingMachineComponent, CoinSlotComponent]
})
export class AppComponent { 
    public initSelection:Cell = new Cell(null);

    vendorMachineCellChanged($event:any) {
        console.log("cell selected " + $event.value.product.name);
        this.initSelection = $event.value;
    }

    paid($event:any) {
        console.log("paid " + $event.product.name);
        this.initSelection.sold = true;
    }

}
