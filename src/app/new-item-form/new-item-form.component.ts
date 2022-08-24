import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/model/item';
import { Subject } from 'src/model/Subject';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.css'],
  
})
export class NewItemFormComponent {

  model = new Item({id: 'string', title: 'string', content: 'string', image: 'string', subjectId: 'string'});
  subjects : Subject[] 

  submitted = false;
  onSubmit() { 
    this.dataService.addNewItem(this.model)
      .subscribe(arg => this.submitted = true);
   }

  newItem() {
    this.model = {id: '', title: '', content: '', image: '', subjectId : '' };
  }
  
  constructor(private dataService : DataService) {}
 
 
  
  ngOnInit(): void {
  }
 
}
