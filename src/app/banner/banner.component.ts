import { Component, OnInit } from "@angular/core";
import { DataStore } from "../services/DataStore";
import { User } from "../types/User";
@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"]
})
export class BannerComponent implements OnInit {
  public loggedInUser: User;

  constructor(dataStore: DataStore) {
    this.loggedInUser = dataStore.getLoggedInUser();
    dataStore.loggedInUserSubject.subscribe({
      next: user => (this.loggedInUser = user)
    });
  }

  ngOnInit() {}
}
