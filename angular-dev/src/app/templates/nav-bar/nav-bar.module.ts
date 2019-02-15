import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../material/material.module';

import { NavBarComponent } from './container/nav-bar.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

@NgModule({
  declarations: [
    NavBarComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
