<<<<<<< HEAD
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve, reject } from 'q';

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
=======
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ServerProxy {
  private serverIp = "";
  private serverPort = "";
  private get initialized() {
    return this.serverIp != "" && this.serverPort != "";
  }
  private get baseUrl() {
    return this.serverIp + ":" + this.serverPort;
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
  }

  constructor(private http: Http, private httpClient: HttpClient) {}

  public setServerInfo(ip, port) {
    this.serverIp = ip;
    this.serverPort = port;
  }

  public getStories() {
    return this.httpClient.get(`http://${this.baseUrl}/stories`);
  }

<<<<<<< HEAD
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
=======
  public getReservationsByUser(userId: string) {
    return this.httpClient.request(
      "get",
      `http://${this.baseUrl}/reservations`,
      { body: { userID: userId } }
>>>>>>> f7b6d320835b0b0d7f85e609d244f1af571373ee
    );
  }
}
