import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { AuthGuard } from './core/guards/auth/auth.guard';

import { VideosListComponent } from './pages/videos-list/container/videos-list.component';
import { VideoComponent } from './pages/video/container/video.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'videos', component: VideosListComponent},
  {path: 'video/:id', component: VideoComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data: {roles: [environment.roleCodes.user, environment.roleCodes.admin]}},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard], data: {roles: [environment.roleCodes.admin]}},
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
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
