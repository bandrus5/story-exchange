import { Review } from './Review';

export class Story {
  static fromDTO(storyDTO): Story {
    return new Story(
      storyDTO.Title,
      storyDTO.StoryID,
      storyDTO.Writer,
      storyDTO.WriterID,
      storyDTO.Genre,
      storyDTO.StoryURL,
      storyDTO.Blurb,
      storyDTO.WordCount,
      new Date(storyDTO.PostedDate),
      storyDTO.DesiredReviews
    );
  }

  title: string;
  storyID: number;
  author: string;
  authorID: number;
  genre: string;
  link: string;
  blurb: string;
  wordCount: number;
  datePosted: Date;
  desiredReviews: number;

  constructor(
    title: string,
    storyID: number,
    author: string,
    authorID: number,
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
    this.authorID = authorID;
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
