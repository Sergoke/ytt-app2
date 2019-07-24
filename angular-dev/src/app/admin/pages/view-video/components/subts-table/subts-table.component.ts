import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Video } from '../../../../../shared/models';
import { AdminApiService } from '../../../../services/api-admin/admin-api.service';
import { MatTable } from '@angular/material';

const LANGS = ['en', 'ua', 'ru'];

@Component({
  selector: 'subts-table',
  templateUrl: './subts-table.component.html',
  styleUrls: ['./subts-table.component.scss']
})
export class SubtsTableComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  @Input() video$: Observable<any>;

  videoForm: FormGroup;
  languages = [];

  constructor(
    private fb: FormBuilder,
    private adminApi: AdminApiService
  ) {
  }

  ngOnInit() {
    this.video$.subscribe((video: Video) => {
      this.languages = Object.keys(video.subts);
      const subtsControls = {};
      this.languages.forEach(lang => {
        subtsControls[lang] = this.fb.array(video.subts[lang].map(value => new FormControl(value)));
      });

      this.videoForm = this.fb.group({
        'id': [video.id, [Validators.required, Validators.pattern('[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]')]],
        'isDemo': [video.isDemo],
        'timeKeys': this.fb.array(video.timeKeys.map(key => new FormControl(key))),
        'subts': this.fb.group(subtsControls)
      });
    });
  }

  updateVideo() {
    this.adminApi.updateVideo(this.videoForm.value).subscribe(console.log, console.error);
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

  get langs() {
    return LANGS.filter(lang => !(this.languages.indexOf(lang) + 1));
  }

  get subtsCount() {
    return (this.videoForm.get('timeKeys') as FormArray).length;
  }
}
