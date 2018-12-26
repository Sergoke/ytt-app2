import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { RolesService } from './shared/services/roles/roles.service';

import { LoginComponent } from './core/auth/components/login/login.component';
import { SignupComponent } from './core/auth/components/signup/signup.component';
import { LogOutComponent } from './core/auth/components/log-out/log-out.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ytt-app2';

  constructor(
    private roles: RolesService,
    private matDialog: MatDialog
  ){
    this.roles.checkRoleAsync();
  }

  ngOnInit(){}

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