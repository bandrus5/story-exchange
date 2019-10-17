export class Reservation {
  userID: number;
  storyID: string; //TODO: this should probably be changed to a number later, since this will be autoincremeting I believe?

  constructor(userID: number, storyID: string) {
    this.userID = userID;
    this.storyID = storyID;
  }
}
