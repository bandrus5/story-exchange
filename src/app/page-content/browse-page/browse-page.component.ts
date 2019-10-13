import { Component, OnInit, ViewChild } from '@angular/core';
import { DataStore } from '../../services/DataStore';
import { Story } from '../../types/Story';

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.css']
})
export class BrowsePageComponent implements OnInit {
  public displayedStories: Story[];
  public showingSearchResults = false;
  public searchString = '';

  @ViewChild('searchBar') searchBar;

  constructor(private dataStore: DataStore) {
    let loggedInName = this.dataStore.getLoggedInUser().getName();
    this.displayedStories = this.dataStore
      .getAllStories()
      .filter(
        story => story.author != loggedInName && story.getReviewsLeft() > 0
      );
  }

  search(value: string) {
    this.searchString = value;
    let loggedInName = this.dataStore.getLoggedInUser().getName();
    this.displayedStories = this.dataStore
      .searchStories(value)
      .filter(
        story => story.author != loggedInName && story.getReviewsLeft() > 0
      );
    this.searchBar.nativeElement.value = '';
    this.showingSearchResults = true;
  }

  clearSearch() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.showingSearchResults = false;
    let loggedInName = this.dataStore.getLoggedInUser().getName();
    this.displayedStories = this.dataStore
      .getAllStories()
      .filter(
        story => story.author != loggedInName && story.getReviewsLeft() > 0
      );
  }

  ngOnInit() {}
}
