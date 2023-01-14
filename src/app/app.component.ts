import { Component, HostBinding } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'yael-news';
  timeToOpen = false;
  ScrollTime = true;
  @HostBinding('style.font-weight') fontWeight = 'normal';
  
  constructor( private DataService: DataService ){
  }
  openNewItemForm(){
    this.timeToOpen = true;
    this.ScrollTime = false;
  }
  closeDialog(){
    this.timeToOpen = false;
    this.ScrollTime = true;
  }
  DarkMode(){

  }
  LightMode(){

  }
}
