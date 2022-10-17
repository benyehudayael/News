import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/model/item';
import { Subject } from 'src/model/Subject';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.css'],

})
export class NewItemFormComponent {

  model = new Item({id: 'string', title: 'string', content: 'string', image: 'string', subjectId: 'string', subjectName: 'string', sourceName: 'string', link: 'string'});
  subjects : Subject[] 

  submitted = false;
  onSubmit() { 
    this.dataService.addNewItem(this.model)
      .subscribe(arg => this.submitted = true);
   }

  newItem() {
    this.model = {id: '', title: '', content: '', image: '', subjectId : '', subjectName: '', sourceName: '', link: ''};
  }
  
  constructor(private dataService : DataService) {}
 
 
  
  ngOnInit(): void {
  }
 
}
