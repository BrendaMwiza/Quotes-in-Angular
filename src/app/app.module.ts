import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CohenComponent } from './cohen/cohen.component';
import { DateCountPipe } from './date-count.pipe';
import { CohenDetailsComponent } from './cohen-details/cohen-details.component';
import { CohenFormComponent } from './cohen-form/cohen-form.component';
import { VotesComponent } from './votes/votes.component';

@NgModule({
  declarations: [
    AppComponent,
    CohenComponent,
    DateCountPipe,
    CohenDetailsComponent,
    CohenFormComponent,
    VotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
