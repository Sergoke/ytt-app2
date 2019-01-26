import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageModule } from './components/admin-page/admin-page.module';
import { AddVideoModule } from './components/add-video/add-video.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminPageModule,
    AddVideoModule
  ]
})
export class AdminModule { }
