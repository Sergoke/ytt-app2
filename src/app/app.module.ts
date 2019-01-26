import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { SingletonsModule } from './singletons/singletons.module';
import { ContentModule } from './content/content.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { SignupComponent } from './core/auth/components/signup/signup.component';
import { LogOutComponent } from './core/auth/components/log-out/log-out.component';
import { ErrorMsgComponent } from './core/auth/components/error-msg/error-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LogOutComponent,
    ErrorMsgComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SingletonsModule,
    SharedModule,
    MaterialModule,
    ContentModule
  ],
  providers: [

  ],
  entryComponents: [
    LoginComponent,
    SignupComponent,
    LogOutComponent,
    ErrorMsgComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
