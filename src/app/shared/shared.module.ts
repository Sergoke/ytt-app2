import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IfRoleDirective } from './directives/if-role/if-role.directive';

import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    IfRoleDirective,

    SafePipe
  ],
  exports: [
    IfRoleDirective,

    SafePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
