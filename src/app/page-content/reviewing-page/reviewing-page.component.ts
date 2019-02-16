import { Component, OnInit } from '@angular/core';
import { DataStore } from '../../services/DataStore';
import { ReviewReservation } from '../../types/ReviewReservation';

@Component({
  selector: 'app-reviewing-page',
  templateUrl: './reviewing-page.component.html',
  styleUrls: ['./reviewing-page.component.css']
})
export class ReviewingPageComponent implements OnInit {

  private dataStore: DataStore;
  public allReviews: ReviewReservation[];
  public uncompletedReviews: ReviewReservation[];
  public completedReviews: ReviewReservation[];

  constructor() { 
    this.dataStore = DataStore.getInstance();
    this.uncompletedReviews = this.dataStore.getReservedStories();
    this.completedReviews = this.dataStore.getReviewedStories();
  }

  ngOnInit() {
  }

  getUncompletedReviews() {
    return this.uncompletedReviews.filter(review => review.reviewCompleted == null);
  }

  getCompletedReviews() {
    return this.uncompletedReviews.filter(review => review.reviewCompleted != null).concat(this.completedReviews);
  }

}
