import { Component } from '@angular/core';
import { Cohen } from './cohen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  quotes: Cohen[] = [
    new Cohen(1, 'All that you are is all that I will ever need','By ED SHEERAN', new Date(2019,8,22)),
    new Cohen(2, 'Never let a confused man waste tour time or enrgy','By R.H SIN', new Date(2019,8,22)),
    new Cohen(3, 'There is nothing that I wouldint do to make you feel my love','By BOB DYLAN', new Date(2019,8,22)),
    new Cohen(4, 'You always gain by giving love','By REESE WHITHERSPOON', new Date(2019,8,22)),

  ]
}

