export class Reservation {
  UserID: number;
  StoryID: number;

  constructor(UserID: number, StoryID: number) {
    this.UserID = UserID;
    this.StoryID = StoryID;
  }
}
