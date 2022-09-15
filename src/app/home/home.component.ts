import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: string
  constructor() { }

  ngOnInit(): void {
    this.date = moment().format('dddd, DD MMMM');
  }
  

}
