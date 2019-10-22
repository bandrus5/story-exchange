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
<<<<<<< HEAD
      new Date(storyDTO.datePosted),
      storyDTO.desiredReviews,
      []
=======
      storyDTO.datePosted,
      storyDTO.desiredReviews,
      storyDTO.completedReviews
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
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
<<<<<<< HEAD
    return this.desiredReviews;
=======
    return this.desiredReviews - this.completedReviews.length;
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
  }
}
