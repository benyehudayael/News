import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'src/model/Subject';
import { NewItemFormComponent } from '../new-item-form/new-item-form.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class TopMenuComponent implements OnInit {
  
  subjects: Subject[]
  constructor(private dataService: DataService, private router: Router) { 
  
  }

  navigate() {
    this.router.navigate(['/NewItemForm']);
  }

  ngOnInit(): void {
    this.dataService.getSubjects()
       .subscribe(subjects => {
           this.subjects = subjects.filter(x => x.showInMenu);
         });
  }


  

 
}
