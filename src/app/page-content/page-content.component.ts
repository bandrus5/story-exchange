import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-content",
  templateUrl: "./page-content.component.html",
  styleUrls: ["./page-content.component.css"]
})
export class PageContentComponent implements OnInit {
<<<<<<< HEAD
  public currentPage: 'browse' | 'your-stories' | 'reviewing';

  constructor() {
    this.currentPage = 'browse';
=======
  public currentPage: "browse" | "your-stories" | "reviewing";

  constructor() {
    this.currentPage = "browse";
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
  }

  ngOnInit() {}

<<<<<<< HEAD
  setCurrentPage(newPage: 'browse' | 'your-stories' | 'reviewing') {
=======
  setCurrentPage(newPage: "browse" | "your-stories" | "reviewing") {
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
    this.currentPage = newPage;
  }
}
