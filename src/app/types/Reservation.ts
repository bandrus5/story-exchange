export class Reservation {
  userID: number;
  storyID: number;

  constructor(userID: number, storyID: number) {
    this.userID = userID;
    this.storyID = storyID;
  }
}
