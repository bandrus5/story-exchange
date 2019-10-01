import { Component, OnInit } from '@angular/core';
import { DataStore } from '../../services/DataStore';
import { Story } from '../../types/Story';

@Component({
  selector: 'app-your-stories-page',
  templateUrl: './your-stories-page.component.html',
  styleUrls: ['./your-stories-page.component.css']
})
export class YourStoriesPageComponent implements OnInit {

  public stories: Story[];
  public showAddModal = false;
  constructor(private dataStore: DataStore) {
    this.stories = this.dataStore.getStoriesByUsername(this.dataStore.getLoggedInUser().getName());
  }

  ngOnInit() {
  }

  openAddModal() {
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
    this.stories = this.dataStore.getStoriesByUsername(this.dataStore.getLoggedInUser().getName());
  }

}
