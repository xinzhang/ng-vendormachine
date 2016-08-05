import {Product} from './product';

export class Cell {
     constructor(public product: Product){
     }
     
     stock :number;
     sold : boolean;
}