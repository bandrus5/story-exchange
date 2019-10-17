import { Component, OnInit, Input } from '@angular/core';
import { ReviewReservation } from '../../../types/ReviewReservation';
import { DataStore } from '../../../services/DataStore';
import { Story } from '../../../types/Story';

@Component({
  selector: 'app-story-review-card',
  templateUrl: './story-review-card.component.html',
  styleUrls: ['./story-review-card.component.css']
})
export class StoryReviewCardComponent implements OnInit {
  @Input() title: string;
  @Input() completed: boolean;

  @Input() review: ReviewReservation;

  public shouldShowDetails: boolean;
  public shouldShowReview: boolean;

  public showAddForm: boolean;

  constructor(private dataStore: DataStore) {}

  ngOnInit() {}

  getStory(): Story {
    return this.dataStore.getStoryByName(this.review.story);
  }

  showDetails() {
    this.shouldShowDetails = true;
  }

  closeDetails() {
    this.shouldShowDetails = false;
  }

  addReview() {
    this.showAddForm = true;
  }

  closeAddForm() {
    this.showAddForm = false;
  }

  showReview() {
    this.shouldShowReview = true;
  }

  hideReview() {
    this.shouldShowReview = false;
  }

  getReviewText() {
    return this.review.reviewText;
  }
}
