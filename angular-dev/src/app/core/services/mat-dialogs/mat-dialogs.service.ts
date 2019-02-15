import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginComponent } from './../../auth-modals/login/login.component';
import { SignupComponent } from './../../auth-modals/signup/signup.component';
import { LogOutComponent } from './../../auth-modals/log-out/log-out.component';

@Injectable({
  providedIn: 'root'
})
export class MatDialogsService {

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
