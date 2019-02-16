import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStore } from '../../../services/DataStore';
import { Story } from '../../../types/Story';

@Component({
  selector: 'app-add-story-form',
  templateUrl: './add-story-form.component.html',
  styleUrls: ['./add-story-form.component.css']
})
export class AddStoryFormComponent implements OnInit {
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

  addStory(title: string, genre: string, link: string, blurb: string, storyLength: string, storyReviews: string) {
    if (title && genre && link && blurb && storyLength && storyReviews) {
      const newStory = new Story(title, title + '1234', this.dataStore.getLoggedInUser().getName(), genre, link, blurb, +storyLength, new Date(), +storyReviews, []);
      this.dataStore.addStories([newStory]);
      this.close();
    } else {
      console.log("Not enough detail my dude");
    }
  }

}