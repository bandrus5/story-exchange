export class Review {
  reviewText: string;
  reviewerID: number;
  storyID: number;
  stars?: number;
  reviewCompleted: Date;

  constructor(
    reviewText: string,
    reviewerID: number,
    storyID?: number,
    reviewCompleted?: Date,
    stars?: number
  ) {
    this.reviewText = reviewText;
    this.reviewerID = reviewerID;
    this.storyID = storyID;
    this.reviewCompleted = reviewCompleted;
    this.stars = stars;
  }
}
