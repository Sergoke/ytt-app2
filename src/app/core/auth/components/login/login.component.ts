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

  user;
  error: boolean;

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

  onSubmit(){
    this.auth.login(this.user).subscribe(res => {
      this.error = false;
      this.dialogRef.close();
      this.router.navigate(['/profile']);
    },
    error => {
      this.error = true;
    });
  }
  
}