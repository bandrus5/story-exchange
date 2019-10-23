import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../../types/Story';
import { DataStore } from '../../../services/DataStore';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-browse-story-card',
  templateUrl: './browse-story-card.component.html',
  styleUrls: ['./browse-story-card.component.css']
})
export class BrowseStoryCardComponent implements OnInit {
  @Input() story: Story;
  public shouldShowMore = false;
  private loggedInUser: User;
  constructor(private dataStore: DataStore) {
    this.loggedInUser = this.dataStore.loggedInUser;
    this.dataStore.loggedInUserSubject.subscribe({
      next: user => (this.loggedInUser = user)
    });
  }

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
    // TODO: include this in next refactor
    let stories = this.loggedInUser
      .getReservedStories()
      .filter(reservation => reservation.storyID == this.story.storyID);
    return stories.length > 0;
  }

  reviewed() {
    let stories = this.loggedInUser
      .getReviewedStories()
      .filter(review => review.storyID == this.story.storyID);
    return stories.length > 0;
  }
}
