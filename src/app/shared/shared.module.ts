import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipe } from './pipes/safe.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { IfRoleDirective } from './directives/if-role/if-role.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    
  ],
  declarations: [
    NotFoundComponent, 
    UnauthorizedComponent,
    // IfRoleDirective
  ],
    exports: [
      // IfRoleDirective
    ]
})
export class SharedModule { }
