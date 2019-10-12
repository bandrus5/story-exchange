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
}
