import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';

import { VideoComponent } from './container/video.component';

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
    SharedModule
  ],
  entryComponents: [
    TranslationComponent
  ]
})
export class VideoModule { }
