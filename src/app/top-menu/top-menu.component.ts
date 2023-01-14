import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'src/model/Subject';
import { NewItemFormComponent } from '../new-item-form/new-item-form.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Item } from 'src/model/item';
import { ApprovalService } from '../services/approval.service';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class TopMenuComponent implements OnInit {

  value = '';
  subjects: Subject[]
  items: Item[];
  light: boolean = false;
  @Output() addItemClick = new EventEmitter();

  constructor(private dataService: DataService, private router: Router, private appService: ApprovalService) { }

  navigate() {
    this.appService.updateApprovalMessage(this.value);
    this.router.navigate(['/search']);
  }
  navigateNewItem() {
    // this.router.navigate(['/NewItemForm']);
    this.addItemClick.emit();

  }
  ngOnInit(): void {
    //this.appService.currentApprovalStageMessage.subscribe(msg => this.value = msg);
    this.dataService.getSubjects()
      .subscribe(subjects => {
        this.subjects = subjects.filter(x => x.showInMenu);
      });
  }
  toggleDarkTheme(): void {
    document.body.classList.toggle('light-theme');
    this.light = !this.light;
  }
}
