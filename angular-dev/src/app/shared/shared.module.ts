import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { IfRoleDirective } from './directives/if-role/if-role.directive';
import { SafePipe } from './pipes/safe.pipe';
import { YtPlayerComponent } from './components/yt-player/yt-player.component';
import { NoticeComponent } from './components/notice/notice.component';
import { SubtsTableComponent } from './components/subts-table/subts-table.component';
import { SubtsParserComponent } from './components/subts-parser/subts-parser.component';

const exported = [
  NoticeComponent,
  YtPlayerComponent,
  SubtsTableComponent,
  SubtsParserComponent,

  IfRoleDirective,

  SafePipe,
];

@NgModule({
  declarations: exported,
  exports: exported,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    SubtsParserComponent
  ]
})
export class SharedModule { }
