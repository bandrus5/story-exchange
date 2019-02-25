import { Component, OnInit, ViewChild } from '@angular/core';
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
  public showingSearchResults = false;
  public searchString = "";

  @ViewChild('searchBar') searchBar; 

  constructor() {
    this.dataStore = DataStore.getInstance();
    let loggedInName = this.dataStore.getLoggedInUser().getName();
    this.displayedStories = this.dataStore.getAllStories().filter(story => story.author != loggedInName);
  } 

  search(value: string) {
    this.searchString = value;
    this.displayedStories = this.dataStore.searchStories(value);
    this.searchBar.value = '';
    this.showingSearchResults = true;
  }

  clearSearch() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.showingSearchResults = false;
    let loggedInName = this.dataStore.getLoggedInUser().getName();
    this.displayedStories = this.dataStore.getAllStories().filter(story => story.author != loggedInName);
  }

  ngOnInit() {
  }

}
