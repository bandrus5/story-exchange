import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DataStore } from "../../../services/DataStore";
import { Story } from "../../../types/Story";

@Component({
  selector: "app-add-story-form",
  templateUrl: "./add-story-form.component.html",
  styleUrls: ["./add-story-form.component.css"]
})
export class AddStoryFormComponent implements OnInit {
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();

  public postingCostNow: number = 0;
  public postingCostLater: number = 0;

  constructor(private dataStore: DataStore) {}

  ngOnInit() {}

  close() {
    this.closeEvent.emit();
  }

  addStory(
    title: string,
    genre: string,
    link: string,
    blurb: string,
    storyLength: string,
    storyReviews: string
  ) {
    if (title && genre && link && blurb && storyLength && storyReviews) {
      const newStory = new Story(
        title,
        title + "1234",
        this.dataStore.getLoggedInUser().getName(),
        genre,
        link,
        blurb,
        +storyLength,
        new Date(),
        +storyReviews,
        []
      );
      this.dataStore.addStories([newStory]);
      this.dataStore.getLoggedInUser().addCredit(-1 * this.postingCostNow);
      this.close();
    } else {
      console.log("Not enough detail my dude");
    }
  }

  public updateCost(reviews: number, wordCount: number) {
    let totalCost = 0;
    if (reviews > 0 && wordCount > 0) {
      totalCost = reviews * Math.floor(Math.round(5 + wordCount / 1000));
    }
    this.postingCostNow = Math.floor(totalCost / 3);
    this.postingCostLater = Math.ceil((totalCost * 2) / 3);
  }
}
