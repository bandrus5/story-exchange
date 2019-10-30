export class Review {
  ReviewText: string;
  ReviewerID: number;
  StoryID: number;
  Stars?: number;

  constructor(
    ReviewText: string,
    ReviewerID: number,
    StoryID?: number,
    Stars?: number
  ) {
    this.ReviewText = ReviewText;
    this.ReviewerID = ReviewerID;
    this.StoryID = StoryID;
    this.Stars = Stars;
  }
}
