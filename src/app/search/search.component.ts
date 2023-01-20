import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AppComponent } from '../app.component';
import { Item } from 'src/model/item';
import { ApprovalService } from '../services/approval.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputValue: string = '';
  items: Item[] = [];

  constructor(private router: Router, private dataService: DataService, private appService: ApprovalService) {

  }

  ngOnInit(): void {
    this.appService.currentApprovalStageMessage.subscribe(msg => this.loadItems(msg));
    this.loadItems(this.inputValue);
    //this.inputValue = this.router.getCurrentNavigation()?.extras.state?.['searchKey']; 
  }
  loadItems(msg: string) {
    this.inputValue = msg;
    this.dataService.getItems(1, 9, '', this.inputValue)
      .subscribe((items) => {
        this.items = items;
      });
  }

}
