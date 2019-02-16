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
  private dataStore: DataStore;
  constructor() { 
    this.dataStore = DataStore.getInstance();
  }
  ngOnInit() {
  }

  close() {
		this.closeEvent.emit();
  } 

  addReview(review: string) {
    if (review.length > 100) {
      this.reservation.reviewText = review;
      this.reservation.reviewCompleted = new Date();
      this.close();
    } else {
      console.log("Not enough detail my dude");
    }
  }
}
