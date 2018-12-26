import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipe } from './pipes/safe.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { IsGuestDirective } from './directives/is-guest/is-guest.directive';
import { IsAdminDirective } from './directives/is-admin/is-admin.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    
  ],
  declarations: [
    NotFoundComponent, 
    UnauthorizedComponent, 
    IsGuestDirective, 
    IsAdminDirective
  ],
    exports: [
      IsGuestDirective,
      IsAdminDirective
    ]
})
export class SharedModule { }
