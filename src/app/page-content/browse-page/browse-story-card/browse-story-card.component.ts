<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../../types/Story';
import { DataStore } from '../../../services/DataStore';
import { User } from 'src/app/types/User';
=======
import { Component, OnInit, Input } from "@angular/core";
import { Story } from "../../../types/Story";
import { DataStore } from "../../../services/DataStore";
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee

@Component({
  selector: "app-browse-story-card",
  templateUrl: "./browse-story-card.component.html",
  styleUrls: ["./browse-story-card.component.css"]
})
export class BrowseStoryCardComponent implements OnInit {
  @Input() story: Story;
  public shouldShowMore = false;
<<<<<<< HEAD
  private loggedInUser: User;
  constructor(private dataStore: DataStore) {
    this.loggedInUser = this.dataStore.loggedInUser;
    this.dataStore.loggedInUserSubject.subscribe({
      next: user => (this.loggedInUser = user)
    });
  }
=======
  constructor(private dataStore: DataStore) {}
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee

  ngOnInit() {}

  getStoryCredit(): number {
    return 5 + Math.round(this.story.wordCount / 1000);
  }

  showMore() {
    this.shouldShowMore = true;
  }

  closeDialog(e: Event) {
    this.shouldShowMore = false;
  }

  reserveForReview() {
    this.dataStore.reserveReview(this.story);
  }

  reserved() {
<<<<<<< HEAD
    let stories = this.loggedInUser
      .getReservedStories()
      .filter(reservation => reservation.storyID == this.story.storyID);
=======
    let user = this.dataStore.getLoggedInUser();
    let stories = user
      .getReservedStories()
      .filter(rStory => rStory.story == this.story.title);
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
    return stories.length > 0;
  }

  reviewed() {
<<<<<<< HEAD
    let stories = this.loggedInUser
      .getReviewedStories()
      .filter(review => review.storyID == this.story.storyID);
=======
    let user = this.dataStore.getLoggedInUser();
    let stories = user
      .getReviewedStories()
      .filter(rStory => rStory.story == this.story.title);
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
    return stories.length > 0;
  }
}
