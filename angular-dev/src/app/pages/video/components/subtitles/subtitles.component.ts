import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material';

import { TranslService } from '../../../../core/services/translation/transl.service';

import { TranslationComponent } from './../translation/translation.component';

@Component({
  selector: 'subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.css']
})
export class SubtitlesComponent {

  @Output() scrollSubts = new EventEmitter();

  @Input() player;
  @Input() currentRowIndex;
  @Input() disableWordClick: boolean = false;

  private _subtitles;

  @Input('subtitles')
  set subtitles(subtitles: Array<string>){
    if(subtitles){
      this._subtitles = subtitles.map( (string: string) => string.split(' '));
    }
  }

  get subtitles(){
    return this._subtitles;
  }

  private lastClickedWord;

  constructor(
    private dialog: MatDialog,
    private tr: TranslService
  ) { }

  wordClick(e){
    if ("SPAN" === e.target.tagName && !this.disableWordClick) {
      var wasVideoPlaying = false;
      if(this.player && this.player.getPlayerState() === 1){
        wasVideoPlaying = true;
        this.player.pauseVideo();
      }
      this.lastClickedWord && this.lastClickedWord.classList.remove("clickedWord");
      this.lastClickedWord = e.target;
      this.lastClickedWord.classList.add("clickedWord");

      this.tr.translate(e.target.textContent).subscribe( word => {
        const dialogRef = this.dialog.open(TranslationComponent, {
          data: {
            originWord: e.target.textContent,
            translatedWord: word
          }
        });   
        
        dialogRef.afterClosed().subscribe(() => {
          if(wasVideoPlaying) this.player.playVideo();
          this.lastClickedWord.classList.remove("clickedWord");
        });
      });
    }
  }

  scrollSubtsDown(){
    this.scrollSubts.emit(true);
  }

  scrollSubtsUp(){
    this.scrollSubts.emit(false);
  }

}
