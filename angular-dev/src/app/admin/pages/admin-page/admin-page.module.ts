import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../../../material/material.module';
import { RouterModule } from '@angular/router';

import { AdminPageComponent } from './container/admin-page.component';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class AdminPageModule { }
