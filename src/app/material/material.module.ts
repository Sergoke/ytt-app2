import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatTableModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    // CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTableModule,
    MatRadioModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTableModule,
    MatRadioModule
  ],
  declarations: []
})
export class MaterialModule { }
