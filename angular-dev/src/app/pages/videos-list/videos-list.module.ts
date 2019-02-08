import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosListComponent } from './container/videos-list.component';

import { MaterialModule } from './../../material/material.module';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    InfiniteScrollModule
  ],
  declarations: [
    VideosListComponent
  ]
})
export class VideosListModule { }
