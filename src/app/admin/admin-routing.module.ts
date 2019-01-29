import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AddVideoComponent } from './pages/add-video/container/add-video.component';
import { AdminPageComponent } from './pages/admin-page/container/admin-page.component';

const routes: Routes = [
  {path: '', component: AdminPageComponent},
  {path: 'add-video', component: AddVideoComponent}
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
