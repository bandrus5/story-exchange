import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../types/Review';
import { Story } from '../types/Story';

@Injectable({
  providedIn: 'root'
})
export class ServerProxy {
  private serverIp = '';
  private serverPort = '';
  private get initialized() {
    return this.serverIp != '' && this.serverPort != '';
  }
  private get baseUrl() {
    return this.serverIp + ':' + this.serverPort;
  }

  constructor(private http: Http, private httpClient: HttpClient) {}

  public setServerInfo(ip, port) {
    this.serverIp = ip;
    this.serverPort = port;
  }

  public getStories() {
    return this.httpClient.request('get', `http://${this.baseUrl}/stories`);
  }

  public addStory(story: Story) {
    return this.httpClient.request('post', `http://${this.baseUrl}/stories`, {
      body: {
        authorID: story.authorID,
        link: story.link,
        title: story.title,
        genre: story.genre,
        blurb: story.blurb,
        wordCount: story.wordCount,
        desiredReviews: story.desiredReviews
      }
    });
  }

  public getStoriesByUserID(userID: number) {
    return this.httpClient.request(
      'get',
      `http://${this.baseUrl}/stories/${userID}`
    );
  }

  public getStoryFeed(userID: number) {
    return this.httpClient.request(
      'get',
      `http://${this.baseUrl}/feed/${userID}`
    );
  }

  public searchStories(searchTerm: string, userID: number) {
    return this.httpClient.request(
      'get',
      `http://${this.baseUrl}/stories/search/${searchTerm}?user=${userID}`
    );
  }

  public reserveReview(userID: number, storyID: number) {
    return this.httpClient.request(
      'post',
      `http://${this.baseUrl}/reservations`,
      {
        body: { userID: userID, storyID: storyID }
      }
    );
  }

  public getReservationsByUser(userID: number) {
    return this.httpClient.request(
      'get',
      `http://${this.baseUrl}/reservations/${userID}`
    );
  }

  public reviewStory(review: Review) {
    return this.httpClient.request('post', `http://${this.baseUrl}/reviews`, {
      body: {
        review: {
          ReviewText: review.ReviewText,
          ReviewerID: review.ReviewerID,
          StoryID: review.StoryID
        }
      }
    });
  }

  public decrementDesiredReviews(storyID: number) {
    return this.httpClient.request(
      'post',
      `http://${this.baseUrl}/stories/desired-reviews/${storyID}`
    );
  }

  public getReviewsByUser(userID: number) {
    return this.httpClient.request(
      'get',
      `http://${this.baseUrl}/reviews/user/${userID}`
    );
  }

  public getReviewsByStory(storyID: number) {
    return this.httpClient.request(
      'get',
      `http://${this.baseUrl}/reviews/story/${storyID}`
    );
  }

  public login(username: string, password: string) {
    return this.httpClient.request('post', `http://${this.baseUrl}/login`, {
      body: { UserName: username, Password: password }
    });
  }

  public register(username: string, password: string) {
    return this.httpClient.request('post', `http://${this.baseUrl}/register`, {
      body: { UserName: username, Password: password }
    });
  }
}
