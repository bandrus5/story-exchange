import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataStore } from '../../../services/DataStore';
import { ReviewReservation } from '../../../types/ReviewReservation';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.css']
})
export class AddReviewFormComponent implements OnInit {
  @Input() reservation: ReviewReservation;
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();
  public charCount = 0;
  constructor(private dataStore: DataStore) {}
  ngOnInit() {}

  close() {
    this.closeEvent.emit();
  }

  addReview(review: string) {
    if (review.length > 600) {
      this.reservation.reviewText = review;
      this.reservation.reviewCompleted = new Date();
      let story = this.dataStore
        .getAllStories()
        .filter(story => story.title == this.reservation.story)[0];
      this.dataStore
        .getLoggedInUser()
        .addCredit(5 + Math.floor(Math.round(story.wordCount / 1000)));
      this.close();
    } else {
      console.log('Not enough detail my dude');
    }
  }

  getDateStatement(): string {
    let status = '';
    let date: Date = null;
    date = this.reservation.dateReserved;
    status = 'Reserved on ';
    let stringDate =
      date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
    return status + stringDate;
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
