import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Item } from 'src/model/item';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: string
  slideIndex = 0;
  items: Item [] = [];
  pageIndex: number = 1
  pageSize: number = 9
  itemsNews: Item [] = [];
  pageIndexNews: number = 1
  pageSizeNews: number = 5
  itemsSport: Item [] = [];
  itemsReel: Item [] = [];
  sid: string | null
  @Input() freeText: string
  
  /*Ceck this!*/
  content: any;
  constructor(
    private dataService : DataService) { }

  ngOnInit(): void {
    this.date = moment().format('dddd, DD MMMM');

      
  }
  ngAfterViewInit(): void {
    this.loadItems();
    this.loadItemsNews();
    this.loadItemsSport();
    this.loadItemsReel();

  }
  plusSlides(n: number) {
    if ((this.slideIndex + n) >= this.items.length) {
      this.slideIndex = 0; 
      return;
    }
    if ((this.slideIndex + n) < 0) {
      this.slideIndex = this.items.length - 1;
      return;
    }
    this.slideIndex += n;
  }

  currentSlide(n: number) {
    this.slideIndex = n;
  }
  private loadItems() {
    this.dataService.getItems(this.pageIndex, this.pageSize, this.sid, this.freeText)
      .subscribe(items => {
        this.items = this.items.concat(items);
      });
  }
  private loadItemsNews() {
    this.dataService.getItems(this.pageIndexNews, this.pageSizeNews, this.sid, this.freeText)
      .subscribe(items => {
        this.itemsNews = items;
      });
  }
  private loadItemsSport() {
    this.dataService.getItems(this.pageIndexNews, this.pageSizeNews, '250C59D7-CA7E-4D07-8DFF-572466408EFD', this.freeText)
      .subscribe(items => {
        this.itemsSport = items;
      });
  }
  private loadItemsReel() {
    this.dataService.getItems(this.pageIndexNews, this.pageSizeNews, this.sid, this.freeText)
      .subscribe(items => {
        this.itemsReel = items;
      });
  }
  public goToLink(url: string){
    // this.items = this.items.map(x => { if(x.link == url) return new Item(x); else return x; } );
    window.open(url);
  }

}
