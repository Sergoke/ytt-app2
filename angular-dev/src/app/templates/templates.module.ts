import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModalsModule } from '../core/auth-modals/auth-modals.module';
import { NavBarModule } from './nav-bar/nav-bar.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    AuthModalsModule,
    NavBarModule
  ],
  exports: [
    FooterComponent,
    NavBarModule,
    HeaderComponent
  ]
})
export class TemplatesModule { }
