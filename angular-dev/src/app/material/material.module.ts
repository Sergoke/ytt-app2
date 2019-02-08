import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatTableModule,
  MatRadioModule,
  MatExpansionModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTableModule,
    MatRadioModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule
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
    MatRadioModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
