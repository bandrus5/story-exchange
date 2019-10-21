import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataStore } from '../../../services/DataStore';
import { Review } from '../../../types/Review';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.css']
})
export class AddReviewFormComponent implements OnInit {
  @Input() reservation: Review;
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();
  public charCount = 0;
  constructor(private dataStore: DataStore) {}
  ngOnInit() {}

  close() {
    this.closeEvent.emit();
  }

  addReview(reviewText: string) {
    if (reviewText.length > 600) {
      this.reservation.reviewText = reviewText;
      this.reservation.reviewCompleted = new Date();
      let story = this.dataStore
        .getAllStories()
        .filter(story => story.storyID == this.reservation.storyID)[0];
      const user = this.dataStore.getLoggedInUser();
      user.addCredit(5 + Math.floor(Math.round(story.wordCount / 1000)));
      const review = new Review(reviewText, user.getUserID(), story.storyID);
      user.reviewStory(review);
      // story.completedReviews.push(review);
      this.close();
    } else {
      console.log('Not enough detail my dude');
    }
  }

  updateCharCount(review: string) {
    this.charCount = review.length;
  }

  getLengthStatement(): string {
    if (this.charCount < 600) {
      return this.charCount + ' / 600 characters';
    } else {
      return this.charCount + ' characters';
    }
  }
}
