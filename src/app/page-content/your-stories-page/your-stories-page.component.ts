import { Component, OnInit } from '@angular/core';
import { DataStore } from '../../services/DataStore';
import { Story } from '../../types/Story';

@Component({
  selector: 'app-your-stories-page',
  templateUrl: './your-stories-page.component.html',
  styleUrls: ['./your-stories-page.component.css']
})
export class YourStoriesPageComponent implements OnInit {

  private dataStore: DataStore;
  public stories: Story[];
  constructor() { 
    this.dataStore = DataStore.getInstance();
    this.stories = this.dataStore.getStoriesByUsername(this.dataStore.getLoggedInUser().getName());
  }

  ngOnInit() {
  }

}
