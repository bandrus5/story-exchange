import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { Story } from '../types/Story';
import { ServerProxy } from './ServerProxy';
import { Subject } from 'rxjs';
import { Reservation } from '../types/Reservation';
import { Review } from '../types/Review';

@Injectable({
  providedIn: 'root'
})
export class DataStore {
  loggedInUser: User | null;
  allUsers: User[];
  allStories: Story[];
  userReservations: Reservation[];
  userReviews: Review[];
  storyReviews: Map<string, Review[]> = new Map();

  private _loggedInUserSubject = new Subject<User>();
  private _allStoriesSubject = new Subject<Story[]>();
  private _reservationsSubject = new Subject<Reservation[]>();
  private _reviewsSubject = new Subject<Review[]>();
  private _storyReviewsSubjects: Map<string, Subject<Review[]>> = new Map();
  private _loginErrorMessageSubject = new Subject<string>();

  loremText = 'lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque non euismod liber pellentesque ac augue lobortis facilisis magna ut molestie odio Ut sollicitudin condimentum venenati praesent ultricies feugiat augue non'.split(
    ' '
  );
  userNames = [
    'bettyTheBot',
    'tommyj',
    'shj1996',
    'megera',
    'bandr',
    'mstbrn',
    'hotman',
    'merric',
    'neo',
    'crest',
    'xkcd',
    'fanboy',
    'heyho',
    'bgibbard',
    'meyer',
    'hackerman'
  ];
  genres = 'Mystery Sci-Fi Fantasy Drama Romance Adventure Action Horror Fan-Fiction Humor Other'.split(
    ' '
  );

  private constructor(private server: ServerProxy) {
    this.allUsers = [];
    this.allStories = [];
  }

  public async refresh() {
    this.server.getStories().subscribe(res => {
      this.allStories = (res as any[]).map(storyDTO => Story.fromDTO(storyDTO));
      this._allStoriesSubject.next(this.allStories);
      this.allStories.forEach(story => {
        this._storyReviewsSubjects[story.storyID] = new Subject<Review[]>();
      });
    });
  }

  getStoriesByUsername(username: string): Story[] {
    return this.allStories
      .filter(story => {
        return story.author == username;
      })
      .sort((a, b) => {
        return (
          new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
        );
      });
  }

  addUsers(users: User[]) {
    users.forEach(user => {
      this.allUsers.push(user);
    });
  }

  addStories(stories: Story[]) {
    this.allStories.push(...stories);
  }

  reserveReview(story: Story) {
    const user = this.getLoggedInUser();
    const reservation = new Reservation(user.getUserID(), story.storyID);
    // TODO: remove parseInt once storyID is a number
    this.server.reserveReview(user.getUserID(), parseInt(story.storyID));
    this.userReservations.push(reservation);
    this._reservationsSubject.next(this.userReservations);
    this.addReservation(reservation);
  }

  addReservation(reservation: Reservation) {
    const storyID = reservation.StoryID;
    const story = this.allStories.filter(story => story.storyID == storyID)[0];
    story.desiredReviews -= 1;
  }

  reviewStory(review: Review) {
    this.server.reviewStory(review).subscribe(res => {
      this.getReservations();
      this.getReviews();
    });
  }

  getReviews() {
    this.server.getReviewsByUser(this.getLoggedInUser().getUserID()).subscribe(
      (reviews: Review[]) => {
        this.userReviews = reviews;
        this._reviewsSubject.next(this.userReviews);
      },
      err => {
        console.log(err);
      }
    );
  }

  getReviewsByStory(storyID: string) {
    // TODO: remove parseInt once storyID is a number
    this.server
      .getReviewsByStory(parseInt(storyID))
      .subscribe((reviews: Review[]) => {
        this.storyReviews[storyID] = reviews;
        this._storyReviewsSubjects[storyID].next(reviews);
      });
  }

  async logInUser(username: string, password: string) {
    this.server.login(username, password).subscribe(
      (res: Response) => {
        const user = res['user'];
        this.loggedInUser = new User(
          user['UserID'],
          user['UserName'],
          [],
          user['Credit']
        );
      },
      err => {
        this._loginErrorMessageSubject.next(err.error);
      }
    );
  }

  registerUser(username: string, password: string) {
    this.server.register(username, password).subscribe(
      (res: Response) => {
        const user = res['user'];
        this.loggedInUser = new User(
          user['UserID'],
          user['UserName'],
          [],
          user['Credit']
        );
      },
      err => {
        this._loginErrorMessageSubject.next(err.error);
      }
    );
  }

  getPostedStories(): Story[] {
    return this.getLoggedInUser().getPostedStories();
  }

  getStoryByID(storyID: string): Story {
    return this.allStories.filter(story => story.storyID == storyID)[0];
  }

  getReservations() {
    this.server
      .getReservationsByUser(this.getLoggedInUser().getUserID())
      .subscribe(
        (reservations: Reservation[]) => {
          this.userReservations = reservations;
          this._reservationsSubject.next(this.userReservations);
        },
        err => {
          console.log(err);
        }
      );
  }

  getCredit(): number {
    return this.getLoggedInUser().getCredit();
  }

  getLoggedInUser(): User {
    return this.loggedInUser;
  }

  searchStories(searchQuery: string): Story[] {
    return this.allStories.filter(story => {
      return (
        (story.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          story.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          story.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
        story.author !== this.getLoggedInUser().getName()
      );
    });
  }

  getAllStories() {
    return this.allStories;
  }

  generateReviewText(): string {
    let review = '';
    for (let i = 0; i < 130; i++) {
      review +=
        this.loremText[Math.floor(Math.random() * this.loremText.length)] + ' ';
    }
    return review;
  }

  generateRandomDate(): Date {
    const startDate = new Date(2018, 10, 1);
    const endDate = new Date(2019, 0, 1);
    return new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    );
  }

  shuffleLoremText() {
    for (var i = 0; i < 100; i++) {
      var randomIndex = Math.floor(Math.random() * this.loremText.length);
      var randomIndex2 = Math.floor(Math.random() * this.loremText.length);
      var temp = this.loremText[randomIndex];
      this.loremText[randomIndex] = this.loremText[randomIndex2];
      this.loremText[randomIndex2] = temp;
    }
  }

  get loggedInUserSubject() {
    return this._loggedInUserSubject;
  }

  get allStoriesSubject() {
    return this._allStoriesSubject;
  }

  get reservationsSubject() {
    return this._reservationsSubject;
  }

  get reviewsSubject() {
    return this._reviewsSubject;
  }

  get storyReviewsSubjects() {
    return this._storyReviewsSubjects;
  }

  get loginErrorMessageSubject() {
    return this._loginErrorMessageSubject;
  }
}
