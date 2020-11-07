import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { component } from './components-list/component';
// maneja la logica del carrito
@Injectable({
  providedIn: 'root'
})

export class ComponentCartService {
  private _CartList:component[]=[];
  CartList: BehaviorSubject<component[]>=new BehaviorSubject([]);

  
  constructor() { }

  addToCart(componente: component) {

    let item: component= this._CartList.find((v1)=>v1.name==componente.name);
    if (!item){
      this._CartList.push({... componente});
    } else{
      item.quantity+=componente.quantity;
    }
    
    console.log(this._CartList); 
    this.CartList.next(this._CartList)
  }

}
