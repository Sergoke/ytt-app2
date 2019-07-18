import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../core/services/api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getUserData().subscribe(user => {
      this.userData = user;
    });
  }

}
