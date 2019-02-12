import { Component, OnInit, Input } from '@angular/core';
import { DataStore } from '../../../services/DataStore';
import { Story } from '../../../types/Story';

@Component({
  selector: 'app-posted-story-card',
  templateUrl: './posted-story-card.component.html',
  styleUrls: ['./posted-story-card.component.css']
})
export class PostedStoryCardComponent implements OnInit {

  @Input() story: Story;
  public shouldShowMore = false;
  private dataStore: DataStore;
  private now: number;
  constructor() { 
    this.dataStore = DataStore.getInstance(); 
    this.now = Date.now();
  }

  ngOnInit() {
  }

  getStoryCredit(): number {
    return Math.round(this.story.wordCount * this.story.getReviewsLeft() / 100000); 
  }

  showMore() {
    this.shouldShowMore = true;
  }

  closeDialog(e: Event) {
    this.shouldShowMore = false;
  }

  reserveForReview() {
    this.dataStore.reserveReview(this.story);
  }

  getTimeDiff() {
    return Math.round((this.story.datePosted.getTime()-this.now)/(1000*60*60*24));
  }

  getTimeDiffStatement() {
    debugger;
    const days = Math.round((this.now - this.story.datePosted.getTime())/(1000*60*60*24));
    if (days > 0) {
      return days == 1 ? "Posted yesterday" : "Posted " + days + " day(s) ago";
    }
    return "Posted today";
  }

  showReviews() {
    //TODO not implemented
  }

}
