import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: {};

  constructor(
    private auth: AuthService,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {
    this.user = {
      login: '',
      password: ''
    };
  }

  get diagnostic(){
    return JSON.stringify(this.user);
  }

  logIn(){
    this.auth.login(this.user).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
      this.router.navigate(['/videos']);
    },
    error => {
      console.log('error, my friend')
    });
  }
  
}
