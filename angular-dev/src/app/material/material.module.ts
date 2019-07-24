import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
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
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule
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
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule
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
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
