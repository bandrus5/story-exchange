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
      storyDTO.desiredReviews
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
  // TODO: Set desired reviews to a constant instead of letting the user choose.
  //        That way the logic can use the constant to determine the desiredReviews that are left
  desiredReviews: number;

  constructor(
    title: string,
    storyID: string,
    author: string,
    genre: string,
    link: string,
    blurb: string,
    wordCount: number,
    datePosted: Date,
    desiredReviews: number
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
  }

  getReviewsLeft(): number {
    return this.desiredReviews;
  }
}
