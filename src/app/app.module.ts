import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { SportComponent } from './sport/sport.component';
import { ReelComponent } from './reel/reel.component';
import { HomeComponent } from './home/home.component';
import { WorklifeComponent } from './worklife/worklife.component';
import { TravelComponent } from './travel/travel.component';
import { FutureComponent } from './future/future.component';
import { CultureComponent } from './culture/culture.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    NewsComponent,
    SportComponent,
    ReelComponent,
    HomeComponent,
    WorklifeComponent,
    TravelComponent,
    FutureComponent,
    CultureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
