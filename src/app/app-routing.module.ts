import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CultureComponent } from './culture/culture.component';
import { FutureComponent } from './future/future.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ReelComponent } from './reel/reel.component';
import { SearchComponent } from './search/search.component';
import { SportComponent } from './sport/sport.component';
import { TravelComponent } from './travel/travel.component';
import { WorklifeComponent } from './worklife/worklife.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'sport', component: SportComponent },
  { path: 'reel', component: ReelComponent },
  { path: 'worklife', component: WorklifeComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'future', component: FutureComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }