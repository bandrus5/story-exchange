import { Component, OnInit, Input } from '@angular/core';
import { DataStore } from '../../../services/DataStore';
import { Story } from '../../../types/Story';

@Component({
  selector: 'app-posted-story-card',
  templateUrl: './posted-story-card.component.html',
  styleUrls: ['./posted-story-card.component.css']
})
export class PostedStoryCardComponent implements OnInit {
  @Input() story: Story;
  public shouldShowMore = false;
  public shouldShowReviews = false;
  private now: number;
  constructor(private dataStore: DataStore) {
    this.now = Date.now();
  }

  ngOnInit() {}

  getStoryCredit(): number {
    return Math.round(
      (this.story.wordCount * this.story.getReviewsLeft()) / 100000
    );
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

  getTimeDiff() {
    return Math.round(
      (new Date(this.story.datePosted).getTime() - this.now) /
        (1000 * 60 * 60 * 24)
    );
  }

  getTimeDiffStatement() {
    const days = Math.round(
      (this.now - new Date(this.story.datePosted).getTime()) /
        (1000 * 60 * 60 * 24)
    );
    if (days > 0) {
      return days == 1 ? 'Posted yesterday' : 'Posted ' + days + ' day(s) ago';
    }
    return 'Posted today';
  }

  showReviews() {
    this.shouldShowReviews = true;
  }

  hideReviews() {
    this.shouldShowReviews = false;
  }

  getStoryReviews() {
    //TODO: On the next refactor, we can probably get rid of completedReviews all together, as well as reservedReviews and
    // reviewedStories on User, among other things, and move all of that logic to the server.
    console.log(this.story.completedReviews);
    return this.story.completedReviews;
  }

  reviewsAvailable() {
    return this.getStoryReviews().length >= 1;
  }
}
