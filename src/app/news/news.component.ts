import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { Item } from 'src/model/item';
import { DataService } from '../services/data.service';
import { map} from 'rxjs/operators'

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
  /*Ceck this!*/
  content: any;
  scroll$: Observable<any>;
  

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
   this.content = document.querySelector('.items-container');
   /*what the meaning of 'content!'*/
   this.scroll$ = fromEvent(this.content!, 'scroll').pipe(map(() => { return this.content!.scrollTop; }))
   this.scroll$.subscribe((scrollPos) => {
    let limit = this.content!.scrollHeight - this.content!.clientHeight;
    if (limit - scrollPos < 2){
      this.pageIndex++;
      this.dataService.getItems(this.pageIndex, this.pageSize, this.sid)
      .subscribe(items => {
        this.items.concat(items);
      });
     /* this.loadingState = */
    }
   })

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