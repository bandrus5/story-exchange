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
    this.updateStories();
    this.dataStore.currentUserStoriesSubject.subscribe({
      next: stories => this.stories = stories
    });
  }

  private updateStories() {
    this.dataStore.refresh();
    this.dataStore.getStoriesForCurrentUser();
  }

  ngOnInit() {}

  openAddModal() {
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
    this.updateStories();
  }
}
