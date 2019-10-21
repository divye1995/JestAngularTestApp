import { Component, OnInit } from '@angular/core';

import { ListingService } from './listing-service.service';
import { Observable } from 'rxjs';
import { UserModel } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-test-app';
  list$ : Observable<UserModel[]>;
  constructor(
    private listService :ListingService,
  ){
  }
  ngOnInit(){
    this.initListService()
  }
  initListService(){
    this.list$ =  this.listService.getList();
  }
  onClicked(user){
    
  }
}
