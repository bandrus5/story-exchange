import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../../types/Story';

@Component({
  selector: 'app-browse-story-card',
  templateUrl: './browse-story-card.component.html',
  styleUrls: ['./browse-story-card.component.css']
})
export class BrowseStoryCardComponent implements OnInit {

  @Input() story: Story;
  constructor() { }

  ngOnInit() {
  }

}
