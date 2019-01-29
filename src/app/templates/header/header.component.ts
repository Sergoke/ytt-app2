import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { environment } from '../../../environments/environment';

import { LoginComponent } from '../../core/auth-modals/login/login.component';
import { SignupComponent } from '../../core/auth-modals/signup/signup.component';
import { LogOutComponent } from '../../core/auth-modals/log-out/log-out.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: any;
  private guest: number;
  private user: number;
  private admin: number;

  constructor(
    private matDialog: MatDialog
  ) { 
    this.roles = environment.roleCodes;
    this.guest = this.roles.guest;
    this.user = this.roles.user;
    this.admin = this.roles.admin;
  }

  ngOnInit() {
  }

  loginDialog(){
    this.matDialog.open(LoginComponent, {
      width: '400px'
    });
  }

  signupDialog(){
    this.matDialog.open(SignupComponent, {
      width: '400px'
    });
  }

  logoutDialog(){
    this.matDialog.open(LogOutComponent, {
      width: '400px'
    });
  }

}
