import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './pages/admin-page/container/admin-page.component';
import { AddVideoComponent } from './pages/add-video/container/add-video.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: '', component: AdminPageComponent},
  {path: 'add-video', component: AddVideoComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
