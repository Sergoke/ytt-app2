import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipe } from './pipes/safe.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { IsGuestDirective } from './directives/is-guest/is-guest.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    
  ],
  declarations: [
    NotFoundComponent, 
    UnauthorizedComponent, 
    IsGuestDirective],
    exports: [IsGuestDirective]
})
export class SharedModule { }
