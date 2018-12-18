import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoComponent } from './container/video.component';
import { YtPlayerComponent } from './components/yt-player/yt-player.component';

import { SafePipe } from './../../shared/pipes/safe.pipe';
import { SubtitlesComponent } from './components/subtitles/subtitles.component';
import { TranslationComponent } from './components/translation/translation.component';

@NgModule({
  declarations: [
    SafePipe,
    VideoComponent,
    YtPlayerComponent,
    SubtitlesComponent,
    TranslationComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    TranslationComponent
  ]
})
export class VideoModule { }
