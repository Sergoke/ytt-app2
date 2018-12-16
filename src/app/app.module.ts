import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { VideosListModule } from './content/videos-list/videos-list.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/auth/login/login.component';
import { SignupComponent } from './core/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    VideosListModule
  ],
  providers: [],
  entryComponents: [
    LoginComponent,
    SignupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
