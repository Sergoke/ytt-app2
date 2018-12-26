import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: {};

  constructor() {
    this.user = {
      login: '',
      password: ''
    };
  }

  get diagnostic(){
    return JSON.stringify(this.user);
  }

}
