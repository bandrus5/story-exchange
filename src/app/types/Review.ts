export class Review {
  reviewText: string;
  reviewerID: number;
  storyID: number;
  stars?: number;

  constructor(
    reviewText: string,
    reviewerID: number,
    storyID?: number,
    stars?: number
  ) {
    this.reviewText = reviewText;
    this.reviewerID = reviewerID;
    this.storyID = storyID;
    this.stars = stars;
  }
}
