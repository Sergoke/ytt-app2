import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosListComponent } from './container/videos-list.component';

import { MaterialModule } from './../../material/material.module';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    InfiniteScrollModule,
    SharedModule
  ],
  declarations: [
    VideosListComponent
  ]
})
export class VideosListModule { }
