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
    this.dataStore.filteredStoriesSubject.subscribe({
      next: stories => (this.displayedStories = stories)
    });
    this.dataStore.getReservations();
    this.dataStore.getReviews();
    this.dataStore.searchStories('');
  }

  search(value: string) {
    this.searchString = value;
    this.dataStore.searchStories(value);
    this.searchBar.nativeElement.value = '';
    this.showingSearchResults = true;
  }

  clearSearch() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.showingSearchResults = false;
    this.dataStore.searchStories('');
  }

  ngOnInit() {}
}
