import { Component, Input, ViewChild, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Video } from '../../models';
import { MatDialog, MatTable } from '@angular/material';
import { SubtsParserComponent } from '../subts-parser/subts-parser.component';

const LANGS = ['en', 'ua', 'ru'];

@Component({
  selector: 'app-subts-table',
  templateUrl: './subts-table.component.html',
  styleUrls: ['./subts-table.component.scss']
})
export class SubtsTableComponent implements OnChanges {

  @ViewChild(MatTable) table: MatTable<any>;
  @Input() video: Video;
  @Input() btnText: string;
  @Output() submitVideo = new EventEmitter<Video>();

  videoForm: FormGroup;
  languages = [];

  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {
  }

  ngOnChanges() {
    console.log('changes', this.video);
    if(!this.video) return;

    this.languages = Object.keys(this.video.subts);
    const subtsControls = {};
    this.languages.forEach(lang => {
      subtsControls[lang] = this.fb.array(this.video.subts[lang].map(value => new FormControl(value)));
    });

    this.videoForm = this.fb.group({
      'id': [this.video.id, [Validators.required, Validators.pattern('[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]')]],
      'isDemo': [this.video.isDemo],
      'timeKeys': this.fb.array(this.video.timeKeys.map(key => new FormControl(key))),
      'subts': this.fb.group(subtsControls)
    });
  }

  onSubmit() {
    this.submitVideo.emit(this.videoForm.value);
  }

  addSubt(i: number) {
    (this.videoForm.get('timeKeys') as FormArray).insert(i, this.fb.control(''));
    Object.values((this.videoForm.get('subts') as FormGroup).controls).forEach((fArray: FormArray) => {
      fArray.insert(i, this.fb.control(''));
    });
    this.table && this.table.renderRows();
  }

  removeSubt(i: number) {
    (this.videoForm.get('timeKeys') as FormArray).removeAt(i);
    Object.values((this.videoForm.get('subts') as FormGroup).controls).forEach((fArray: FormArray) => {
      fArray.removeAt(i);
    });
    this.table && this.table.renderRows();
  }

  addLanguage(lang: string) {
    const controls = new Array(this.subtsCount).fill(0).map(() => this.fb.control(''));
    (this.videoForm.get('subts') as FormGroup).addControl(lang, this.fb.array(controls));
    this.languages.push(lang);
  }

  removeLanguage(lang: string) {
    (this.videoForm.get('subts') as FormGroup).removeControl(lang);
    this.languages.splice(this.languages.indexOf(lang), 1);
  }

  openParser(target: string) {
    const dialogRef = this.matDialog.open(SubtsParserComponent, {
      data: {
        target: target,
        value: (target === 'keys' ? this.videoForm.get('timeKeys') : this.videoForm.get('subts').get(target)).value.join('\n').trim()
      },
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;

      const resultLength = result.length;
      if(resultLength < this.subtsCount){
        result.length = this.subtsCount;
        result.fill('', resultLength);
      }
      else if(result.length > this.subtsCount){
        for(let i = 0, subtsCount = this.subtsCount; i < result.length - subtsCount; i++) {
          this.addSubt(this.subtsCount);
        }
      }

      if(target === 'keys'){
        this.videoForm.get('timeKeys').setValue(result);
      }

      else if(LANGS.includes(target)){
        this.videoForm.get('subts').get(target).setValue(result);
      }

      this.table.renderRows();
    });
  }

  export() {
    const content = JSON.stringify(this.videoForm.value);
    const a = document.createElement("a");
    const file = new Blob([content], {type: 'text/plain'});
    a.href = URL.createObjectURL(file);
    a.download = `${this.videoForm.get('id').value}.ytsrt`;
    a.click();
  }

  import(file: File) {
    const reader = new FileReader();

    reader.onload = () => {
      const video: Video = JSON.parse(String(reader.result));
      Object.keys(video.subts).forEach(lang => {
        if(!(this.videoForm.value as Video).subts[lang]) {
          this.addLanguage(lang);
        }
      });
      for(let i = 0; this.subtsCount < video.timeKeys.length; i++) {
        this.addSubt(this.subtsCount);
      }
      this.videoForm.setValue(video);
    };

    reader.onerror = function(e) {
      console.error("An error ocurred reading the file", e);
    };

    reader.readAsText(file, "UTF-8");
  }

  importSrt(file: File) {
    const reader = new FileReader();

    reader.onload = () => {
      const subts = String(reader.result);

      const timeKeys = subts.match(/\d\d:\d\d:\d\d,\d\d\d -->/g).map(subt => {
        return subt.replace(/\d\d:(\d\d):(\d\d),(\d)\d\d -->/, (str, mins, secs, ms) => {
          return `${+mins * 60 + +secs}.${ms}`;
        });
      });

      const subtitles = subts.split('\n\n').map(p => {
        return p.split('\n').pop();
      });

      for(let i = 0; this.subtsCount < timeKeys.length; i++) {
        this.addSubt(this.subtsCount);
      }
      this.videoForm.patchValue({timeKeys, subts: {en: subtitles}});
    };

    reader.onerror = function(e) {
      console.error("An error ocurred reading the file .srt", e);
    };

    reader.readAsText(file, "UTF-8");
  }

  get langs() {
    return LANGS.filter(lang => !(this.languages.indexOf(lang) + 1));
  }

  get subtsCount() {
    return (this.videoForm.get('timeKeys') as FormArray).length;
  }
}
