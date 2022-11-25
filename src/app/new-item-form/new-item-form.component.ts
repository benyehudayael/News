import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  model = new Item({id: '', title: '', content: '', image: '', subjectId: '', subjectName: '', sourceName: '', link: ''});
  subjects : Subject[] 
  @Output() closingDialog = new EventEmitter();

  submitted = false;
  saveAndCloseForm() { 
    this.dataService.addNewItem(this.model)
      .subscribe(arg => this.submitted = true);
    this.closingDialog.emit();
   }
   closeForm(){
     this.closingDialog.emit();
   }
  
  constructor(private dataService : DataService) {}
 
 
  
  ngOnInit(): void {
  }
 
}
