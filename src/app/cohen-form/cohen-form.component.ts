import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cohen } from '../cohen';

@Component({
  selector: 'app-cohen-form',
  templateUrl: './cohen-form.component.html',
  styleUrls: ['./cohen-form.component.css']
})
export class CohenFormComponent implements OnInit {

  newQuotes = new Cohen(0,"","",new Date());
  @Output() addQuote = new EventEmitter<Cohen>();

  submitQuote(){
    this.addQuote.emit(this.newQuotes);
  }

  constructor() { }

  ngOnInit() {
  }

}
