import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards/auth/auth.guard';

import { LoginComponent } from './core/auth/components/login/login.component';
import { SignupComponent } from './core/auth/components/signup/signup.component';
import { VideosListComponent } from './content/videos-list/container/videos-list.component';
import { VideoComponent } from './content/video/container/video.component';
import { HomeComponent } from './content/home/container/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UnauthorizedComponent } from './shared/components/unauthorized/unauthorized.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: {role: 'guest'}},
  {path: 'signup', component: SignupComponent, canActivate: [AuthGuard], data: {role: 'guest'}},
  {path: 'videos', component: VideosListComponent},
  {path: 'video/:id', component: VideoComponent},
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
