import { Component } from '@angular/core';

import {VendingMachineComponent} from './components/vendingMachine.component';
import {CoinSlotComponent} from './components/coinSlot.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [VendingMachineComponent, CoinSlotComponent]
})
export class AppComponent { 

}
