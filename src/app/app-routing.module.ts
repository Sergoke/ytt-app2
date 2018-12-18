import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { VideosListComponent } from './content/videos-list/container/videos-list.component';
import { VideoComponent } from './content/video/container/video.component';

const routes: Routes = [
  {path: 'videos', component: VideosListComponent},
  {path: 'video/:id', component: VideoComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
