import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../material/material.module';
import { SharedModule } from './../../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LogOutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent,
    LogOutComponent
  ]
})
export class AuthModalsModule { }
