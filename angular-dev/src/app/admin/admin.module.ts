import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageModule } from './pages/admin-page/admin-page.module';
import { AddVideoModule } from './pages/add-video/add-video.module';
import { ViewVideoModule } from './pages/view-video/view-video.module';

import { AdminApiService } from './services/api-admin/admin-api.service';

import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    UsersComponent
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    AdminPageModule,
    AddVideoModule,
    ViewVideoModule
  ],

  providers: [
    AdminApiService
  ]
})
export class AdminModule { }
