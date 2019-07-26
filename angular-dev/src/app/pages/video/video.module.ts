import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { VideoComponent } from './video.component';
import { SubtitlesComponent } from './components/subtitles/subtitles.component';
import { TranslationComponent } from './components/translation/translation.component';

@NgModule({
  declarations: [
    VideoComponent,
    SubtitlesComponent,
    TranslationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ],
  entryComponents: [
    TranslationComponent
  ]
})
export class VideoModule { }
