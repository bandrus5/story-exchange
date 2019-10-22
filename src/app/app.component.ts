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

  constructor(private serverProxy: ServerProxy, private dataStore: DataStore) {}

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
    this.dataStore.registerUser(username, password);
  }

  login(username, password) {
    this.dataStore.logInUser(username, password);
  }
}
