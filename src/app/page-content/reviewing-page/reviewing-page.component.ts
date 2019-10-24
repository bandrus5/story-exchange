import { Component, OnInit } from '@angular/core';
import { DataStore } from '../../services/DataStore';
import { Reservation } from '../../types/Reservation';
import { Review } from '../../types/Review';

@Component({
  selector: 'app-reviewing-page',
  templateUrl: './reviewing-page.component.html',
  styleUrls: ['./reviewing-page.component.css']
})
export class ReviewingPageComponent implements OnInit {
  public reservations: Reservation[];
  public reviews: Review[];

  constructor(private dataStore: DataStore) {
    this.dataStore.getReservations();
    dataStore.reservationsSubject.subscribe({
      next: reservations => (this.reservations = reservations)
    });
    this.dataStore.getReviews();
    dataStore.reviewsSubject.subscribe({
      next: reviews => (this.reviews = reviews)
    });
  }

  ngOnInit() {}

  getReservations() {
    return this.reservations;
  }

  getCompletedReviews() {
    return this.reviews;
  }
}
