import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { Item } from 'src/model/item';
import { DataService } from '../services/data.service';
import { map} from 'rxjs/operators'
import { Subject } from 'src/model/Subject';
import { AppComponent } from '../app.component';

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
  freeText: string = '';
  sectionName: string;
  sectionId: any;
  subjects: Subject[];

  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private dataService : DataService) {
      this.sectionId = this._activatedRoute.snapshot.url[1];
  }

  ngOnInit(): void {
    this.dataService.getSubjects()
    .subscribe(subjects => {
        this.subjects = subjects.filter(x => x.showInMenu);
        var subject = this.subjects.find(x => x.id == this.sectionId);
        this.sectionName = subject ? subject.name.toUpperCase() : "NEWS";
      });
  }

  ngAfterViewInit(): void { 
    this._activatedRoute.paramMap.subscribe(params => { 
      console.log(params);
       this.sid = params.get('sid'); 
       this.dataService.getItems(this.pageIndex, this.pageSize, this.sid ?? '', this.freeText)
       .subscribe((Items) => {
         this.items = this.items.concat(Items);
       });
   });

  this.content = document.querySelector('.scroll');
   /*what the meaning of 'content!'*/
   this.scroll$ = fromEvent(this.content!, 'scroll').pipe(map(() => { return this.content!.scrollTop; }))
   this.scroll$.subscribe((scrollPos) => {
    let limit = this.content!.scrollHeight - this.content!.clientHeight;
    if (limit - scrollPos < 180){
      this.pageIndex++;
      this.dataService.getItems(this.pageIndex, this.pageSize, this.sid ?? '', this.freeText)
      .subscribe((Items) => {
        this.items = this.items.concat(Items);
      });
     /* this.loadingState = */
    }
   }) 

   // register to scroll
   // call loadItems if scroll reach the bottom
  }

  // private loadItems() {
  //   this.dataService.getItems(this.pageIndex, this.pageSize, this.sid, this.freeText)
  //     .subscribe(items => {
  //       this.items = this.items.concat(items);
  //     });
  // }
  public goToLink(url: string){
    this.items = this.items.map(x => { if(x.link == url) return new Item(x); else return x; } );
    window.open(url);
  }

  ngOnChanges(): void {
    //TODO: check if free text change and call load items
  }
}