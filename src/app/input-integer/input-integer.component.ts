import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  max: number;

@Input()
  quantity: number;
  ngOnInit(): void {
  }

  @Output()
  quantityChange:EventEmitter<number>=new EventEmitter<number>();

  
  @Output()
  maxReached:EventEmitter<string>=new EventEmitter<string>();


  downQuantity():void{
    if (this.quantity>0){
     this.quantity--;
     this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity():void{
    if (this.quantity<this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else
    this.maxReached.emit("Se alcanzó el máximo");
  }
  onChangequantity(event):void{
    event.preventDefault();
    console.log(event);
    if(event.target.value>this.max){
     event.target.value=this.max;
     this.quantity=this.max;
     this.quantityChange.emit(this.quantity);
    }else if(event.target.value<0){
      this.quantity=0;
    }
  }
}
