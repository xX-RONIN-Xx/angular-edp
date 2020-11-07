import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentCartService } from '../component-cart.service';
import { component } from '../components-list/component';

@Component({
  selector: 'app-edp-cart',
  templateUrl: './edp-cart.component.html',
  styleUrls: ['./edp-cart.component.scss']
})
export class EdpCartComponent implements OnInit {
    cartList$:Observable <component[]>; 
    constructor(private cart:ComponentCartService) {
      this.cartList$= cart.CartList.asObservable();
     // cart.CartList.subscribe(c=>this.cartList=c);
      //cart.CartList.subscribe((observable)=>this.cartList=observable);
   }

  ngOnInit(): void {
  }

}
