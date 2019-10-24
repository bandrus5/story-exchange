import { Story } from './Story';

export class User {
  private userID: number;
  private name: string;
  private postedStories: Story[];
  private credit: number;

  constructor(
    userID: number,
    name: string,
    postedStories: Story[],
    credit: number
  ) {
    this.userID = userID;
    this.name = name;
    this.postedStories = postedStories;
    this.credit = credit;
  }

  public getPostedStories(): Story[] {
    return this.postedStories;
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
}
