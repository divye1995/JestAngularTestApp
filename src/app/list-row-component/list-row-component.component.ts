import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-list-row-component',
  templateUrl: './list-row-component.component.html',
  styleUrls: ['./list-row-component.component.scss'],

})
export class ListRowComponentComponent implements OnInit {

  @Input() firstName:string;
  @Input() lastName:string;
  @Input() gender:string;
  @Output() rowClick = new EventEmitter();

  getClass(){
    return {
      'blue':this.gender==='male',
      'green':this.gender==='female'
    }
  }
  constructor() { 
  }
  ngOnInit() {
  }
}
