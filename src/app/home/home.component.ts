import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Item } from 'src/model/item';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: string
  slideIndex = 0;
  items: Item[] = [];
  pageIndex: number = 1
  pageSize: number = 9;
  itemsNews: Item[] = [];
  pageIndexNews: number = 1;
  pageSizeNews: number = 5;
  itemsSport: Item[] = [];
  itemsReel: Item[] = [];
  sid: string | null;
  freeText: string = '';

  /*Ceck this!*/
  content: any;
  constructor(
    private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.date = moment().format('dddd, DD MMMM');


  }
  ngAfterViewInit(): void {
    this.loadItems();
    this.loadItemsNews();
    this.loadItemsSport();
    this.loadItemsHealth();

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
  navigateEnvierment() {
    this.router.navigateByUrl('/news/B2D99701-B1FD-4ED2-85E6-D169CD26A142');
  }
  private loadItems() {
    this.dataService.getItems(this.pageIndex, this.pageSize, 'B2D99701-B1FD-4ED2-85E6-D169CD26A142', this.freeText)
      .subscribe(items => {
        this.items = this.items.concat(items);
      });
  }
  private loadItemsNews() {
    this.dataService.getItems(this.pageIndexNews, this.pageSizeNews, '999869D9-8083-43B8-A89A-228CADA6BFA3', this.freeText)
      .subscribe(items => {
        this.itemsNews = items;
      });
  }
  private loadItemsSport() {
    this.dataService.getItems(this.pageIndexNews, this.pageSizeNews, '8F3801EE-C813-4719-A800-9C0851C3D22B', this.freeText)
      .subscribe(items => {
        this.itemsSport = items;
      });
  }
  private loadItemsHealth() {
    this.dataService.getItems(this.pageIndexNews, this.pageSizeNews, 'B6B1CA04-4998-4BAD-B9D4-36200103C73F', this.freeText)
      .subscribe(items => {
        this.itemsReel = items;
      });
  }
  public goToLink(url: string) {
    // this.items = this.items.map(x => { if(x.link == url) return new Item(x); else return x; } );
    window.open(url);
  }

}
