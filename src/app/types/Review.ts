export class Review {
  ReviewText: string;
  ReviewerID: number;
  StoryID: string;
  Stars?: number;

  constructor(
    ReviewText: string,
    ReviewerID: number,
    StoryID?: string,
    Stars?: number
  ) {
    this.ReviewText = ReviewText;
    this.ReviewerID = ReviewerID;
    this.StoryID = StoryID;
    this.Stars = Stars;
  }
}
