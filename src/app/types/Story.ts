import { Review } from './Review';

export class Story {
  static fromDTO(storyDTO): Story {
    return new Story(
      storyDTO.title,
      storyDTO.storyID,
      storyDTO.author,
      storyDTO.genre,
      storyDTO.link,
      storyDTO.blurb,
      storyDTO.wordCount,
      storyDTO.datePosted,
      storyDTO.desiredReviews,
      storyDTO.completedReviews
    );
  }

  title: string;
  storyID: string;
  author: string;
  genre: string;
  link: string;
  blurb: string;
  wordCount: number;
  datePosted: Date;
  desiredReviews: number;
  completedReviews: Review[];

  constructor(
    title: string,
    storyID: string,
    author: string,
    genre: string,
    link: string,
    blurb: string,
    wordCount: number,
    datePosted: Date,
    desiredReviews: number,
    completedReviews: Review[]
  ) {
    this.title = title;
    this.storyID = storyID;
    this.author = author;
    this.genre = genre;
    this.link = link;
    this.blurb = blurb;
    this.wordCount = wordCount;
    this.datePosted = datePosted;
    this.desiredReviews = desiredReviews;
    this.completedReviews = completedReviews;
  }

  getReviewsLeft(): number {
    return this.desiredReviews;
  }
}
