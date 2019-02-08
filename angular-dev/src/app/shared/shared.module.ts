import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';

import { IfRoleDirective } from './directives/if-role/if-role.directive';

import { SafePipe } from './pipes/safe.pipe';

import { YtPlayerComponent } from './components/yt-player/yt-player.component';
import { NoticeComponent } from './components/notice/notice.component';

@NgModule({
  declarations: [
    NoticeComponent,
    YtPlayerComponent,

    IfRoleDirective,

    SafePipe
  ],
  exports: [
    YtPlayerComponent,
    NoticeComponent,
    
    IfRoleDirective,

    SafePipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
