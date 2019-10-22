<<<<<<< HEAD
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataStore } from '../../../services/DataStore';
import { Review } from '../../../types/Review';
=======
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { DataStore } from "../../../services/DataStore";
import { ReviewReservation } from "../../../types/ReviewReservation";
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee

@Component({
  selector: "app-add-review-form",
  templateUrl: "./add-review-form.component.html",
  styleUrls: ["./add-review-form.component.css"]
})
export class AddReviewFormComponent implements OnInit {
<<<<<<< HEAD
  @Input() reservation: Review;
=======
  @Input() reservation: ReviewReservation;
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
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
<<<<<<< HEAD
        .filter(story => story.storyID == this.reservation.storyID)[0];
      const user = this.dataStore.getLoggedInUser();
      user.addCredit(5 + Math.floor(Math.round(story.wordCount / 1000)));
      const review = new Review(reviewText, user.getUserID(), story.storyID);
      story.completedReviews.push(review);
=======
        .filter(story => story.title == this.reservation.story)[0];
      this.dataStore
        .getLoggedInUser()
        .addCredit(5 + Math.floor(Math.round(story.wordCount / 1000)));
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
      this.close();
    } else {
      console.log('Not enough detail my dude');
    }
  }

<<<<<<< HEAD
=======
  getDateStatement(): string {
    let status = "";
    let date: Date = null;
    date = this.reservation.dateReserved;
    status = "Reserved on ";
    let stringDate =
      date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
    return status + stringDate;
  }

>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
  updateCharCount(review: string) {
    this.charCount = review.length;
  }

  getLengthStatement(): string {
    if (this.charCount < 600) {
<<<<<<< HEAD
      return this.charCount + ' / 600 characters';
    } else {
      return this.charCount + ' characters';
=======
      return this.charCount + " / 600 characters";
    } else {
      return this.charCount + " characters";
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
    }
  }
}
