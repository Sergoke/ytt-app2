import { Component } from '@angular/core';

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
export class HeaderComponent {

  private roles = environment.roleCodes;
  private guest = this.roles.guest;
  private user = this.roles.user;
  private admin = this.roles.admin;

  constructor(
    private matDialog: MatDialog
  ) { }

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
