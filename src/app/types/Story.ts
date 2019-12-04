import { Review } from './Review';

export class Story {
  static fromDTO(storyDTO): Story {
    return new Story(
      storyDTO.Title,
      Story.getID('StoryID', storyDTO),
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

  getDaysSincePostedString(): string {
    const timeDiff = new Date().getTime() - this.datePosted.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    if (dayDiff === 0) {
      return 'today';
    } else if (dayDiff === 1) {
      return 'yesterday';
    } else {
      return `${dayDiff} days ago`;
    }
  }

  getReviewsLeft(): number {
    return this.desiredReviews;
  }

  private static getID(idName: string, obj: any): number {
    return obj[idName] ? obj[idName] : obj['_id'];
  }
}
