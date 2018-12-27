import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards/auth/auth.guard';

import { VideosListComponent } from './content/videos-list/container/videos-list.component';
import { VideoComponent } from './content/video/container/video.component';
import { HomeComponent } from './content/home/container/home/home.component';
import { AdminPageComponent } from './admin/components/admin-page/container/admin-page.component';
import { AddVideoComponent } from './admin/components/add-video/container/add-video/add-video.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UnauthorizedComponent } from './shared/components/unauthorized/unauthorized.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'videos', component: VideosListComponent},
  {path: 'video/:id', component: VideoComponent},
  {path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard], data: {role: 'admin'}},
  {path: 'admin/add-video', component: AddVideoComponent, canActivate: [AuthGuard], data: {role: 'admin'}}, 
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
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
