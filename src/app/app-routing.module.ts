import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { AuthGuard } from './core/guards/auth/auth.guard';

import { VideosListComponent } from './content/videos-list/container/videos-list.component';
import { VideoComponent } from './content/video/container/video.component';
import { HomeComponent } from './content/home/container/home/home.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { UnauthorizedComponent } from './content/unauthorized/unauthorized.component';
import { ProfileComponent } from './singletons/components/profile/profile.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'videos', component: VideosListComponent},
  {path: 'video/:id', component: VideoComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data: {roles: [environment.roleCodes.user, environment.roleCodes.admin]}},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard], data: {roles: [environment.roleCodes.admin]}},
  // {path: 'unauthorized', component: UnauthorizedComponent},
  // {path: '404', component: NotFoundComponent},
  // {path: '**', component: NotFoundComponent}
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
