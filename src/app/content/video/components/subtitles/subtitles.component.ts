import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material';

import { TranslService } from '../../../../shared/services/translation/transl.service';

import { TranslationComponent } from './../translation/translation.component';

@Component({
  selector: 'subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.css']
})
export class SubtitlesComponent implements OnInit {

  @Output() wordClicked = new EventEmitter();

  @Input() subtitles: Array<Array<string>>;
  @Input() subtOffset;

  private lastClickedWord;

  constructor(
    private dialog: MatDialog,
    private tr: TranslService
  ) { }

  ngOnInit() {
    console.log(this.subtOffset);
  }

  ngOnChanges(){
    console.log('changed:' + this.subtOffset);
  }

  wordClick(e){
    if ("SPAN" === e.target.tagName) {
      this.wordClicked.emit();
      this.lastClickedWord && this.lastClickedWord.classList.remove("clickedWord");
      this.lastClickedWord = e.target;
      e.target.classList.add("clickedWord");

      this.tr.translate(e.target.textContent).subscribe( word => {
        this.dialog.open(TranslationComponent, {
          data: {
            originWord: e.target.textContent,
            translatedWord: word
          }
        });        
      });
    }
  }

}
