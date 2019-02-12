import { Component, OnInit } from '@angular/core';
import { DataStore } from '../services/DataStore';
import { User } from '../types/User';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  private dataStore: DataStore;
  public loggedInUser: User;
  constructor() {
    this.dataStore = DataStore.getInstance();
    this.loggedInUser = this.dataStore.getLoggedInUser();
  }

  ngOnInit() {
  }

}
