import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../../types/Story';
import { DataStore } from '../../../services/DataStore';
import { User } from 'src/app/types/User';
import { Reservation } from 'src/app/types/Reservation';
import { Review } from 'src/app/types/Review';

@Component({
  selector: 'app-browse-story-card',
  templateUrl: './browse-story-card.component.html',
  styleUrls: ['./browse-story-card.component.css']
})
export class BrowseStoryCardComponent implements OnInit {
  @Input() story: Story;
  public shouldShowMore = false;
  private userReservations: Reservation[] = [];
  private userReviews: Review[] = [];

  constructor(private dataStore: DataStore) {
    this.dataStore.reservationsSubject.subscribe({
      next: reservations => (this.userReservations = reservations)
    });
    this.dataStore.reviewsSubject.subscribe({
      next: reviews => (this.userReviews = reviews)
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
    const reservations = this.userReservations.filter(
      reservation => reservation.StoryID == this.story.storyID
    );
    return reservations.length > 0;
  }

  reviewed() {
    const reviews = this.userReviews.filter(
      review => review.StoryID == this.story.storyID
    );
    return reviews.length > 0;
  }
}
