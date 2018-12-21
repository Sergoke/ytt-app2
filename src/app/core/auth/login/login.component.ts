import { Component, OnInit } from '@angular/core';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLogin: string;
  public userPassword: string;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {

  }

  login(e){
    e.preventDefault();

    console.log('login: ' + this.userLogin, this.userPassword);

    this.auth.login({
      login: this.userLogin,
      password: this.userPassword
    }).subscribe(res => {
      console.log(res)
    });
  }
  
}
