import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosListComponent } from './container/videos-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    VideosListComponent
  ]
})
export class VideosListModule { }
