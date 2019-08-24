import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cohen } from '../cohen';

@Component({
    selector: 'app-cohen-details',
    templateUrl: './cohen-details.component.html',
    styleUrls: ['./cohen-details.component.css']
  })
  export class CohenDetailsComponent implements OnInit {

  @Input() quotes: Cohen;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteRemove(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}