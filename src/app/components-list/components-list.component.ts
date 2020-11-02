import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss']
})
export class ComponentsListComponent implements OnInit {

  component={
    "name" : "2n3055",
    "tipe" :"Transistor",
   "price" :500,
   "stock" :20,
   "image":"assets/img/2n3055.jpeg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
