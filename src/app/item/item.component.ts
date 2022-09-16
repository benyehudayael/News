import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/model/item';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  
  
   
  constructor() { }

  ngOnInit(): void {
    
  
   
    //this.item.image = 'https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/0E55/production/_126396630_f38abf98d131f3c4289ac5aa119f078c0d3f1a6c757_876_4674_26301000x563.jpg';
  }

 
}