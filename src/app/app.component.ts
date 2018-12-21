import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { RolesService } from './shared/services/roles/roles.service';

import { LoginComponent } from './core/auth/login/login.component';
import { SignupComponent } from './core/auth/signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ytt-app2';

  constructor(
    private matDialog: MatDialog,
    private roles: RolesService
  ){}

  ngOnInit(){
    console.log(this.roles.getRole());
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
}
