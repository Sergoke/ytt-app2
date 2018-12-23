import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { VideoModule } from './video/video.module';
import { VideosListModule } from './videos-list/videos-list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    VideoModule,
    VideosListModule
  ]
})
export class ContentModule { }
