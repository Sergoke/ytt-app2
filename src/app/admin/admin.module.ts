import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageModule } from './components/admin-page/admin-page.module';
import { AddVideoModule } from './components/add-video/add-video.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminPageModule,
    AddVideoModule
  ]
})
export class AdminModule { }
