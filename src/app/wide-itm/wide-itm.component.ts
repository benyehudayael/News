import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/model/item';

@Component({
  selector: 'app-wide-itm',
  templateUrl: './wide-itm.component.html',
  styleUrls: ['./wide-itm.component.css']
})
export class WideItmComponent implements OnChanges,  OnInit {

  @Input() item: Item;
  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
