import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material/material.module';

import { ViewVideoComponent } from './container/view-video.component';
import { SubtsTableComponent } from './components/subts-table/subts-table.component';
import { SubtsEditTableComponent } from './components/subts-edit-table/subts-edit-table.component';

@NgModule({
  declarations: [
    ViewVideoComponent,
    SubtsTableComponent,
    SubtsEditTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule
  ]
})
export class ViewVideoModule { }
