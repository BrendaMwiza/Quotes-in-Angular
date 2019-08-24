import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CohenComponent } from './cohen/cohen.component';
import { DateCountPipe } from './date-count.pipe';
import { CohenDetailsComponent } from './cohen-details/cohen-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CohenComponent,
    DateCountPipe,
    CohenDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
