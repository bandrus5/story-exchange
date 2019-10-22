import { Component, OnInit, ViewChild } from "@angular/core";
import { DataStore } from "../../services/DataStore";
import { Story } from "../../types/Story";

@Component({
  selector: "app-browse-page",
  templateUrl: "./browse-page.component.html",
  styleUrls: ["./browse-page.component.css"]
})
export class BrowsePageComponent implements OnInit {
  public displayedStories: Story[];
  public showingSearchResults = false;
  public searchString = '';
  public allStories: Story[];

<<<<<<< HEAD
  @ViewChild('searchBar') searchBar;

  constructor(private dataStore: DataStore) {
    let loggedInName = this.dataStore.getLoggedInUser().getName();
    this.allStories = this.dataStore.allStories;
    this.dataStore.allStoriesSubject.subscribe({
      next: allStories => (this.allStories = allStories)
    });
    this.displayedStories = this.allStories.filter(
      story => story.author != loggedInName && story.getReviewsLeft() > 0
    );
=======
  @ViewChild("searchBar") searchBar;

  constructor(private dataStore: DataStore) {
    let loggedInName = this.dataStore.getLoggedInUser().getName();
    this.displayedStories = this.dataStore
      .getAllStories()
      .filter(
        story => story.author != loggedInName && story.getReviewsLeft() > 0
      );
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
  }

  search(value: string) {
    this.searchString = value;
    let loggedInName = this.dataStore.getLoggedInUser().getName();
    this.displayedStories = this.dataStore
      .searchStories(value)
      .filter(
        story => story.author != loggedInName && story.getReviewsLeft() > 0
      );
<<<<<<< HEAD
    this.searchBar.nativeElement.value = '';
=======
    this.searchBar.nativeElement.value = "";
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
    this.showingSearchResults = true;
  }

  clearSearch() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.showingSearchResults = false;
    let loggedInName = this.dataStore.getLoggedInUser().getName();
<<<<<<< HEAD
    this.displayedStories = this.allStories.filter(
      story => story.author != loggedInName && story.getReviewsLeft() > 0
    );
=======
    this.displayedStories = this.dataStore
      .getAllStories()
      .filter(
        story => story.author != loggedInName && story.getReviewsLeft() > 0
      );
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
  }

  ngOnInit() {}
}
