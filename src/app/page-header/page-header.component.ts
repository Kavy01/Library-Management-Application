import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent {
  @Output() menuClicked = new EventEmitter<boolean>();
  constructor(public api: ApiService) {}

  loggedIn()
  {
    return this.api.isLoggedIn();
  }

  logOut() {
    this.api.deleteToken();
    location.replace('/login');
  }
}
