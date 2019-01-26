import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../../material/material.module';
import { RouterModule } from '@angular/router';

import { AddVideoComponent } from './container/add-video.component';

@NgModule({
  declarations: [AddVideoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ]
})
export class AddVideoModule { }
