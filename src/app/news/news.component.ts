import { Component, OnInit, OnChanges } from '@angular/core';
import { Item } from 'src/model/item';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnChanges {

  items: Item[] = [];

  constructor(private dataService : DataService) {
  }

  ngOnInit(): void {
    this.dataService.getItems()
      .subscribe(items => {
          this.items = items;
        });
  }

  ngOnChanges(): void {

  }
}