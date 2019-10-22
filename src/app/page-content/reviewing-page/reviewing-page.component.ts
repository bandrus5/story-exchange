<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { DataStore } from '../../services/DataStore';
import { Reservation } from '../../types/Reservation';
import { Review } from '../../types/Review';
=======
import { Component, OnInit } from "@angular/core";
import { DataStore } from "../../services/DataStore";
import { ReviewReservation } from "../../types/ReviewReservation";
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee

@Component({
  selector: "app-reviewing-page",
  templateUrl: "./reviewing-page.component.html",
  styleUrls: ["./reviewing-page.component.css"]
})
export class ReviewingPageComponent implements OnInit {
<<<<<<< HEAD
  public reservations: Reservation[];
  public completedReviews: Review[];
=======
  public allReviews: ReviewReservation[];
  public uncompletedReviews: ReviewReservation[];
  public completedReviews: ReviewReservation[];
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee

  constructor(private dataStore: DataStore) {
    dataStore.reservationsSubject.subscribe({
      next: reservations => (this.reservations = reservations)
    });
    this.completedReviews = this.dataStore.getReviewedStories();
  }

  ngOnInit() {}

<<<<<<< HEAD
  getReservations() {
    return this.reservations;
  }

  getCompletedReviews() {
    return this.completedReviews;
=======
  getUncompletedReviews() {
    return this.uncompletedReviews.filter(
      review => review.reviewCompleted == null
    );
  }

  getCompletedReviews() {
    return this.uncompletedReviews
      .filter(review => review.reviewCompleted != null)
      .concat(this.completedReviews);
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
  }
}
