import { Component, OnInit } from '@angular/core';
import { DataStore } from '../../services/DataStore';
import { Story } from '../../types/Story';

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.css']
})
export class BrowsePageComponent implements OnInit {
  dataStore: DataStore;
  public displayedStories: Story[];

  constructor() {
    this.dataStore = DataStore.getInstance();
    this.displayedStories = this.dataStore.getAllStories();
  } 

  ngOnInit() {
  }

}
