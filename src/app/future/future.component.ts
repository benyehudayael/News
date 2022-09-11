import { Component, OnInit } from '@angular/core';
import { Item } from 'src/model/item';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  items: Item[] = [];
  pageIndex: number = 1
  pageSize: number = 9

  constructor(private dataService : DataService) {
  }

  ngOnInit(): void {
    this.dataService.getItems(this.pageIndex, this.pageSize, '2f646505-8aa4-40bd-a9fa-9a7f2d8dec7e')
      .subscribe(items => {
          this.items = items;
        });
  }

}
