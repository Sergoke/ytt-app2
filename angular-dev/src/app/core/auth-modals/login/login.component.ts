import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user;
  error: boolean;
  errorMsg: string;

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

  onSubmit(){
    this.auth.login(this.user).subscribe(
    res => {
      this.error = false;
      this.dialogRef.close();
      this.router.navigate(['/profile']);
    },
    error => {
      this.error = true;
      if(error.status === 422){
        this.errorMsg = 'Неверный пароль, попробуйте еще раз';
      }
    });
  }

  onErrorMsgClose(){
    this.error = false;
    this.errorMsg = '';
  }
  
}
