import { Component } from '@angular/core';
import { ServerProxy } from './services/ServerProxy';
import { DataStore } from './services/DataStore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'story-exchange';
  serverIp = '';
  serverPort = '';
  loginErrorMessage;

  constructor(private serverProxy: ServerProxy, private dataStore: DataStore) {
    dataStore.loginErrorMessageSubject.subscribe({
      next: message => (this.loginErrorMessage = message)
    });
  }

  setServer(ip, port) {
    this.serverProxy.setServerInfo(ip, port);
    this.serverIp = ip;
    this.serverPort = port;
    this.dataStore.refresh();
  }

  isLoggedIn() {
    return !!this.dataStore.getLoggedInUser();
  }

  register(username, password) {
    if (this.validateInput(username, password)) {
      this.dataStore.registerUser(username, password);
    }
  }

  login(username, password) {
    if (this.validateInput(username, password)) {
      this.dataStore.logInUser(username, password);
    }
  }

  validateInput(username, password) {
    if (!username) {
      this.loginErrorMessage = 'Username required';
      return false;
    }
    if (!password) {
      this.loginErrorMessage = 'Password required';
      return false;
    }
    return true;
  }
}
