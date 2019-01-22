import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { MatDialogRef, MatDialog } from '@angular/material';

import { LoginComponent } from './../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user;
  errorMsg: string;
  success: boolean;

  constructor(
    private dialogRef: MatDialogRef<SignupComponent>,
    private auth: AuthService,
    private matDialog: MatDialog
  ) {
    this.user = {
      name: '',
      surname: '',
      email: '',
      login: '',
      password: ''
    };
  }

  onSubmit(){
    this.auth.signup(this.user).subscribe(res => {
      if(this.errorMsg !== null) this.errorMsg = null;
      this.success = true;
      setTimeout(() => {
        this.dialogRef.close();
        this.matDialog.open(LoginComponent, {
          width: '400px'
        });
      }, 3000);
    },
    error => {
      this.errorMsg = error.error;
      console.log(this.errorMsg);
    });
  }

  get diagnostic(){
    return JSON.stringify(this.user);
  }

}
