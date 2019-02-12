import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Story } from '../types/Story';
import { DataStore } from '../services/DataStore';

@Component({
  selector: 'app-story-info-modal',
  templateUrl: './story-info-modal.component.html',
  styleUrls: ['./story-info-modal.component.css']
})
export class StoryInfoModalComponent implements OnInit {

  @Input() story: Story;
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

  reserveForReview() {
    this.dataStore.reserveReview(this.story);
    this.close();
  }

  getStoryCredit(): number {
    return Math.round(this.story.wordCount * this.story.getReviewsLeft() / 100000); 
  }

  reservable() {
    debugger;
    return this.story.author != this.dataStore.getLoggedInUser().getName();
  }
}
