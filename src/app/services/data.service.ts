import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/model/item';
import { Subject } from 'src/model/Subject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getItems(pageIndex: number, pageSize: number, subjectId: string | null, freeText: string) : Observable<Item[]> {
    return this.http.get<Item[]>('https://localhost:7071/api/item?pageSize=' 
      + pageSize + '&pageIndex=' + pageIndex + (subjectId != null ? '&sid=' + subjectId : '') + freeText);
  }

  addNewItem(item: Item) : Observable<boolean> {
    return this.http.post<boolean>('https://localhost:7071/api/item', item);
  }

  getSubjects() : Observable<Subject[]> {
    return this.http.get<Subject[]>('https://localhost:7071/api/subject');
  }
}
