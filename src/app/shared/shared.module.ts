import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbService } from './services/db.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DbService
  ]
})
export class SharedModule { }
