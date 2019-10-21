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
      (this.story.datePosted.getTime() - this.now) / (1000 * 60 * 60 * 24)
    );
  }

  getTimeDiffStatement() {
    const days = Math.round(
      (this.now - this.story.datePosted.getTime()) / (1000 * 60 * 60 * 24)
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
    //TODO: add function to datastore, look through all reviews, grab the ones that are for this story. Could be the server.
    // I think I'll leave it like this for now so this PR doesn't get huge, but there's a decent amount of logic we can still move to the server that's like this
    return this.story.completedReviews;
  }

  reviewsAvailable() {
    return this.getStoryReviews().length >= 1;
  }

  getFormattedDate(date: Date) {
    let month = date.getMonth();
    let day = date.getDay();
    let year = date.getFullYear();
    return month + '/' + day + '/' + year;
  }
}
