import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material/material.module';

import { ViewVideoComponent } from './view-video.component';

@NgModule({
  declarations: [
    ViewVideoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule
  ]
})
export class ViewVideoModule { }
