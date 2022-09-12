import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/model/item';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnChanges {

  items: Item[] = [];
  pageIndex: number = 1
  pageSize: number = 9
  sid: string | null
  sub: Observable<ParamMap>;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private dataService : DataService) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      console.log(params);
       this.sid = params.get('sid'); 
       this.loadItems();
   });
   // register to scroll
   // call loadItems if scroll reach the bottom
  }

  private loadItems() {
    this.dataService.getItems(this.pageIndex, this.pageSize, this.sid)
      .subscribe(items => {
        this.items = items;
      });
  }

  ngOnChanges(): void {

  }
}