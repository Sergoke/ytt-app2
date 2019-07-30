import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { AddVideoComponent } from './add-video.component';

@NgModule({
  declarations: [AddVideoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    SharedModule
  ]
})
export class AddVideoModule { }
