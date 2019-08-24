import { Component, OnInit } from '@angular/core';
import { Cohen } from '../cohen';

@Component({
  selector: 'app-cohen',
  templateUrl: './cohen.component.html',
  styleUrls: ['./cohen.component.css']
})
export class CohenComponent implements OnInit {

  quotes: Cohen[] = [
    new Cohen(1, 'All that you are is all that I will ever need','By ED SHEERAN',new Date(2019,8,24)),
    new Cohen(2, 'Never let a confused man waste tour time or enrgy','By R.H SIN',new Date(2019,8,24)),
    new Cohen(3, 'There is nothing that I wouldint do to make you feel my love','By BOB DYLAN',new Date(2019,8,24)),
    new Cohen(4, 'You always gain by giving love','REESE WHITHERSPOON',new Date(2019,8,24)),

  ]
  toggleName(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  removeQuote(isComplete, index){
    if (isComplete) {
      let remove = confirm(`do really want to delete this quote?`)

      if (remove){
        this.quotes.splice(index,1)
      }
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
