import { Component, OnInit } from '@angular/core';
import { NewItem } from 'src/model/item';


@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.css']
})
export class NewItemFormComponent {

  model = new NewItem('123456789', 'bla bla ', 'gla gla ', 'dla dla', 'okey');
  subjects = ['news', 'sport', 'reel', 'worklife', 'travel', 'future', 'culture', 'search']

  submitted = false;
  onSubmit() { this.submitted = true; }

  newItem() {
    this.model = new NewItem('', '', '', '', '');
  }
  
  constructor() { }

  ngOnInit(): void {
  }
 
}
