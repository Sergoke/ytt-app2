import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoModule } from './video/video.module';
import { VideosListModule } from './videos-list/videos-list.module';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    UnauthorizedComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    VideoModule,
    VideosListModule
  ]
})
export class PagesModule { }
