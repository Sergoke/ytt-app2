import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../core/services/auth/auth.service';
import { MatDialogRef, MatDialog } from '@angular/material';

import { LoginComponent } from './../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user;
  error: boolean;
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
      this.onErrorMsgClose();
      this.success = true;
      setTimeout(() => {
        this.dialogRef.close();
        this.matDialog.open(LoginComponent, {
          width: '400px'
        });
      }, 3000);
    },
    error => {
      this.error = true;
      if(error.status === 422){
        this.errorMsg = error.error;
      }
    });
  }

  onErrorMsgClose(){
    this.error = false;
    this.errorMsg = '';
  }

  onSuccessMsgClose(){
    this.success = false;
  }

}
