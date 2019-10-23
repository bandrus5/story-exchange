import { Component, OnInit, Input } from '@angular/core';
import { DataStore } from '../../../services/DataStore';
import { Story } from '../../../types/Story';
import { Review } from 'src/app/types/Review';

@Component({
  selector: 'app-story-review-card',
  templateUrl: './story-review-card.component.html',
  styleUrls: ['./story-review-card.component.css']
})
export class StoryReviewCardComponent implements OnInit {
  @Input() completed: boolean;

  @Input() review?: Review;
  @Input() storyID: string;

  public shouldShowDetails: boolean;
  public shouldShowReview: boolean;

  public showAddForm: boolean;

  constructor(private dataStore: DataStore) {}

  ngOnInit() {}

  getStory(): Story {
    return this.dataStore.getStoryByID(this.storyID);
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
    return this.review ? this.review.reviewText : '';
  }
}
