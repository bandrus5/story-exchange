import { Story } from './Story';
import { Reservation } from './Reservation';
import { Review } from './Review';

export class User {
  private userID: number;
  private name: string;
  private postedStories: Story[];
  private reservedStories: Reservation[];
  private reviewedStories: Review[];
  private credit: number;

  constructor(
    userID: number,
    name: string,
    postedStories: Story[],
    reservedStories: Reservation[],
    reviewedStories: Review[],
    credit: number
  ) {
    this.userID = userID;
    this.name = name;
    this.postedStories = postedStories;
    this.reservedStories = reservedStories;
    this.reviewedStories = reviewedStories;
    this.credit = credit;
  }

  public getPostedStories(): Story[] {
    return this.postedStories;
  }

  public getReservedStories(): Reservation[] {
    return this.reservedStories;
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

  public addReservedStory(reservation: Reservation) {
    this.reservedStories.unshift(reservation);
  }

  public reviewStory(review: Review) {
    this.reservedStories = this.reservedStories.filter(
      reservation => reservation.storyID == review.storyID
    );
    this.reviewedStories.unshift(review);
  }
}
