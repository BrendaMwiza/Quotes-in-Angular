import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  up=0
  down=0

  yes(){
    this.up=this.up+1;
  }
  no(){
    this.down=this.down+1;
  }

  constructor() { }

  ngOnInit() {
  }

}
