import { Component, OnInit, Input } from '@angular/core';
import { DataStore } from '../../../services/DataStore';
import { Story } from '../../../types/Story';
import { Review } from 'src/app/types/Review';

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
  public reviews: Review[] = [];

  constructor(private dataStore: DataStore) {
    this.now = Date.now();
  }

  ngOnInit() {
    const storyID = this.story.storyID;
    this.dataStore.getReviewsByStory(storyID);
    this.dataStore.storyReviewsSubjects[storyID].subscribe({
      next: (reviews: Review[]) => (this.reviews = reviews)
    });
  }

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

  showReviews() {
    this.shouldShowReviews = true;
  }

  hideReviews() {
    this.shouldShowReviews = false;
  }

  getStoryReviews() {
    return this.reviews;
  }

  reviewsAvailable() {
    return this.reviews.length > 0;
  }
}
