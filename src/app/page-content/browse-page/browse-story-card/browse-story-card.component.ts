import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../../types/Story';
import { DataStore } from '../../../services/DataStore';

@Component({
  selector: 'app-browse-story-card',
  templateUrl: './browse-story-card.component.html',
  styleUrls: ['./browse-story-card.component.css']
})
export class BrowseStoryCardComponent implements OnInit {
  @Input() story: Story;
  public shouldShowMore = false;
  constructor(private dataStore: DataStore) {}

  ngOnInit() {}

  getStoryCredit(): number {
    return 5 + Math.round(this.story.wordCount / 1000);
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

  reserved() {
    let user = this.dataStore.getLoggedInUser();
    let stories = user
      .getReservedStories()
      .filter(rStory => rStory.story == this.story.title);
    return stories.length > 0;
  }

  reviewed() {
    let user = this.dataStore.getLoggedInUser();
    let stories = user
      .getReviewedStories()
      .filter(rStory => rStory.story == this.story.title);
    return stories.length > 0;
  }
}
