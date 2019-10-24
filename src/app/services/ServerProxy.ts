import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve, reject } from 'q';
import { Review } from '../types/Review';

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
    return this.httpClient.get(`http://${this.baseUrl}/stories`);
  }

  public reserveReview(userID: number, storyID: number) {
    this.httpClient
      .request('post', `http://${this.baseUrl}/reservations`, {
        body: { userID: userID, storyID: storyID }
      })
      .subscribe();
  }

  public getReservationsByUser(userID: number) {
    return this.httpClient.request(
      'get',
      `http://${this.baseUrl}/reservations/${userID}`
    );
  }

  public reviewStory(review: Review) {
    this.httpClient
      .request('post', `http://${this.baseUrl}/reviews`, {
        body: {
          review: {
            ReviewText: review.ReviewText,
            ReviewerID: review.ReviewerID,
            StoryID: parseInt(review.StoryID)
          }
        }
      })
      .subscribe();
  }

  public getReviewsByUser(userID: number) {
    return this.httpClient.request(
      'get',
      `http://${this.baseUrl}/reviews/user/${userID}`
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
