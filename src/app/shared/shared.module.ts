import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbService } from './services/db.service';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DbService
  ]
})
export class SharedModule { }
