export class Reservation {
  UserID: number;
  StoryID: string; //TODO: this should be changed to a number later, since this will be autoincremeting

  constructor(UserID: number, StoryID: string) {
    this.UserID = UserID;
    this.StoryID = StoryID;
  }
}
