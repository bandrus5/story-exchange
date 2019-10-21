export class Reservation {
  userID: number;
  storyID: string; //TODO: this should be changed to a number later, since this will be autoincremeting

  constructor(userID: number, storyID: string) {
    this.userID = userID;
    this.storyID = storyID;
  }
}
