import { Component, OnInit } from '@angular/core';
import { component } from './component';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss']
})
export class ComponentsListComponent implements OnInit {

  component: component[] = [{
    "name": "2n3055",
    "type": "Transistor",
    "price": 500,
    "stock": 0,
    "image": "assets/img/2n3055.jpeg",
    "clearance":false,
    "quantity":0,
  },
  {
    "name": "Ne555",
    "type": "Oscilador",
    "price": 300,
    "stock": 20,
    "image": "assets/img/ne555.jpeg",
    "clearance":true,
    "quantity":0,
  },
  {
    "name": "Capacitor",
    "type": "Oscilador",
    "price": 100,
    "stock": 50,
    "image": "assets/img/capacitor_25x4700uf.jpeg",
    "clearance":false,
    "quantity":0,
  },
  {
    "name": "Resistencia de precisión",
    "type": "Resistor",
    "price": 5,
    "stock": 500,
    "image": "assets/img/RP2.7_3w.jpeg",
    "clearance":false,
    "quantity":0,
  },
  {
    "name": "Pic 18f4550",
    "type": "Microcontrolador",
    "price": 800,
    "stock": 0,
    "image": "assets/img/pic18f4550.jpeg",
    "clearance":false,
    "quantity":0,
  },
  {
    "name": "Diodo RGB",
    "type": "Led",
    "price": 8,
    "stock": 200,
    "image": "assets/img/diodorgb.jpeg",
    "clearance":false,
    "quantity":0,
  },
  {
    "name": "Zener 13v",
    "type": "Diodo",
    "price": 80,
    "stock": 45,
    "image": "assets/img/zener13v.jpeg",
    "clearance":false,
    "quantity":0,
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  downQuantity(component:component):void{
    if (component.quantity>0){
     component.quantity--;
    }
  }
  upQuantity(component:component):void{
    if (component.quantity<component.stock){
      component.quantity++;
    }
  }
  onChangequantity(event, component:component){
    event.preventDefault();
    console.log(event);
    if(event.target.value>component.stock){
     event.target.value=component.stock;
     component.quantity=component.stock
    }else if(event.target.value<0){
      component.quantity=0;
    }
  }
}
