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
  private _currentUserStoriesSubject = new Subject<Story[]>();
  private _filteredStoriesSubject = new Subject<Story[]>();
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

  private getID(idName: string, obj: any): number {
    return obj[idName] ? obj[idName] : obj['_id'];
  }

  public async refresh() {
    this.server.getStories().subscribe(res => {
      this.allStories = (res as any[]).map(storyDTO => Story.fromDTO(storyDTO));
      this._allStoriesSubject.next(this.allStories);
      this.allStories.forEach(story => {
        if (this._storyReviewsSubjects[story.storyID] === undefined) {
          this._storyReviewsSubjects[story.storyID] = new Subject<Review[]>();
        }
      });
    });
  }

  getStoriesForCurrentUser() {
    this.server
      .getStoriesByUserID(this.loggedInUser.getUserID())
      .subscribe(res => {
        const currentUserStories = (res as any[])
          .map(storyDTO => Story.fromDTO(storyDTO))
          .sort((a, b) => {
            return b.datePosted.getTime() - a.datePosted.getTime();
          });
        this._currentUserStoriesSubject.next(currentUserStories);
      });
  }

  addUsers(users: User[]) {
    users.forEach(user => {
      this.allUsers.push(user);
    });
  }

  addStory(story: Story, postingCost: number) {
    return this.server.addStory(story, postingCost);
  }

  reserveReview(story: Story) {
    const user = this.getLoggedInUser();
    const reservation = new Reservation(user.getUserID(), story.storyID);
    this.server
      .reserveReview(user.getUserID(), story.storyID)
      .subscribe(res => {
        this.refresh();
      });
    this.userReservations.push(reservation);
    this._reservationsSubject.next(this.userReservations);
  }

  reviewStory(review: Review, creditEarned: number) {
    this.server.reviewStory(review, creditEarned).subscribe(res => {
      this.getLoggedInUser().addCredit(creditEarned);
      this.refresh();
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

  getReviewsByStory(storyID: number) {
    this.server.getReviewsByStory(storyID).subscribe((reviews: Review[]) => {
      this.storyReviews[storyID] = reviews;
      this._storyReviewsSubjects[storyID].next(reviews);
    });
  }

  async logInUser(username: string, password: string) {
    this.server.login(username, password).subscribe(
      (res: Response) => {
        const user = res['user'];
        this.loggedInUser = new User(
          this.getID('UserID', user),
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
          this.getID('UserID', user),
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

  getStoryByID(storyID: number): Story {
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

  searchStories(searchQuery?: string) {
    const handleResult = res => {
      const filteredStories = (res as any[]).map(storyDTO =>
        Story.fromDTO(storyDTO)
      );
      this._filteredStoriesSubject.next(filteredStories);
    };

    if (searchQuery) {
      this.server
        .searchStories(searchQuery, this.loggedInUser.getUserID())
        .subscribe(handleResult);
    } else {
      this.server
        .getStoryFeed(this.loggedInUser.getUserID())
        .subscribe(handleResult);
    }
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

  get currentUserStoriesSubject() {
    return this._currentUserStoriesSubject;
  }

  get filteredStoriesSubject() {
    return this._filteredStoriesSubject;
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
