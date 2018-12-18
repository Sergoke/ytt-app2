import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material';

import { TranslationComponent } from './../translation/translation.component';

@Component({
  selector: 'subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.css']
})
export class SubtitlesComponent implements OnInit {

  @Output() wordClicked = new EventEmitter<boolean>();

  @Input() subtitles: Array<Array<string>>;
  @Input() subtOffset;

  private lastClickedWord;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log(this.subtOffset);
  }

  ngOnChanges(){
    console.log('changed:' + this.subtOffset);
  }

  wordClick(e){
    if ("SPAN" === e.target.tagName) {
      this.lastClickedWord && this.lastClickedWord.classList.remove("clickedWord");
      this.lastClickedWord = e.target;
      e.target.classList.add("clickedWord");
      var xhr = new XMLHttpRequest;
      xhr.onreadystatechange = (function(ev) {
          if (4 == ev.currentTarget.readyState && 200 == ev.currentTarget.status) {
            console.log(xhr.responseText);
            this.dialog.open(TranslationComponent, {
              data: {
                originWord: e.target.textContent,
                translatedWord: xhr.responseText
              }
            });

            this.wordClicked.emit(true);
          }
      }
      ).bind(this);
      xhr.open("GET", "http://localhost:2500/tr/" + e.target.textContent);
      xhr.send();
    }
  }

}
