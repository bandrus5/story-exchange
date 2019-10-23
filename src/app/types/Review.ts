export class Review {
  reviewText: string;
  reviewerID: number;
  storyID: string;
  stars?: number;

  constructor(
    reviewText: string,
    reviewerID: number,
    storyID?: string,
    stars?: number
  ) {
    this.reviewText = reviewText;
    this.reviewerID = reviewerID;
    this.storyID = storyID;
    this.stars = stars;
  }
}
