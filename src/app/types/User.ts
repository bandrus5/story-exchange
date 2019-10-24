import { Story } from './Story';
import { Reservation } from './Reservation';
import { Review } from './Review';

export class User {
  private userID: number;
  private name: string;
  private postedStories: Story[];
  private reviewedStories: Review[];
  private credit: number;

  constructor(
    userID: number,
    name: string,
    postedStories: Story[],
    reviewedStories: Review[],
    credit: number
  ) {
    this.userID = userID;
    this.name = name;
    this.postedStories = postedStories;
    //TODO: delete commented stuff if the logic is fine
    this.reviewedStories = reviewedStories;
    this.credit = credit;
  }

  public getPostedStories(): Story[] {
    return this.postedStories;
  }

  public getReviewedStories(): Review[] {
    return this.reviewedStories;
  }

  public getCredit(): number {
    return this.credit;
  }

  public addCredit(newCredit: number) {
    this.credit += newCredit;
  }

  public getName(): string {
    return this.name;
  }

  public getUserID(): number {
    return this.userID;
  }

  // public reviewStory(review: Review) {
  //   this.reservedStories = this.reservedStories.filter(
  //     reservation => reservation.StoryID == review.StoryID
  //   );
  //   this.reviewedStories.unshift(review);
  // }
}
