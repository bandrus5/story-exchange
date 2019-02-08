import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {

  public currentPage: 'browse'|'your-stories'|'reviewing';

  constructor() { 
    this.currentPage = 'browse';
  }

  ngOnInit() {
  }

  setCurrentPage(newPage: 'browse'|'your-stories'|'reviewing') {
    this.currentPage = newPage;
  }

}
