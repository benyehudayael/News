import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewItemFormComponent } from './new-item-form/new-item-form.component';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:sid', component: NewsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'NewItemForm', component: NewItemFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}