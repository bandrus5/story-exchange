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

  public showAddForm: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  getDateStatement(): string {
    let status = "";
    let date: Date = null;
    if (this.completed) {
      date = this.review.reviewCompleted;
      status = "Reviewed on ";
    } else {
      date = this.review.dateReserved;
      status = "Reserved on ";
    }
    let stringDate = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
    return status + stringDate;
  }

  getStory(): Story {
    return DataStore.getInstance().getStoryByName(this.review.story);
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

}
