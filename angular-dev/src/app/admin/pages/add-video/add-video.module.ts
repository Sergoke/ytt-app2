import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../../material/material.module';
import { RouterModule } from '@angular/router';

import { AddVideoComponent } from './container/add-video.component';
import { SubtsParserComponent } from './components/subts-parser/subts-parser.component';

@NgModule({
  declarations: [AddVideoComponent, SubtsParserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  entryComponents: [
    SubtsParserComponent
  ]
})
export class AddVideoModule { }
