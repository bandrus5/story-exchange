import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Story } from "../types/Story";
import { DataStore } from "../services/DataStore";

@Component({
  selector: "app-story-info-modal",
  templateUrl: "./story-info-modal.component.html",
  styleUrls: ["./story-info-modal.component.css"]
})
export class StoryInfoModalComponent implements OnInit {
  @Input() story: Story;
  @Input() isReservable: boolean;
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();

  constructor(private dataStore: DataStore) {}

  ngOnInit() {}

  close() {
    this.closeEvent.emit();
  }

  reserveForReview() {
    this.dataStore.reserveReview(this.story);
    this.close();
  }

  getStoryCredit(): number {
    return 5 + Math.round(this.story.wordCount / 1000);
  }

  reservable() {
    return (
      this.isReservable &&
      this.story.author != this.dataStore.getLoggedInUser().getName()
    );
  }
}
