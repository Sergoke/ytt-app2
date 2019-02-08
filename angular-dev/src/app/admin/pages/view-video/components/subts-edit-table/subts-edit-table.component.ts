import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { ApiAdminService } from './../../../../services/api-admin/api-admin.service';

@Component({
  selector: 'subts-edit-table',
  templateUrl: './subts-edit-table.component.html',
  styleUrls: ['./subts-edit-table.component.css']
})
export class SubtsEditTableComponent implements OnInit {

  @Input() video$: Observable<any>;

  video: Object;

  videoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiAdminService
  ) { }

  ngOnInit() {
    this.video$.subscribe(video => {
      this.video = video;

      let timeKeys = this.video['timeKeys'].map(key => {
        return new FormControl(key, [Validators.required]);
      });

      let subtsEn = this.video['subts']['en'].map(subt => {
        return new FormControl(subt, [Validators.required]);
      });

      let subtsRu = this.video['subts']['ru'].map(subt => {
        return new FormControl(subt, [Validators.required]);
      });

      this.videoForm = this.fb.group({
        'id': [video.videoId, Validators.compose([Validators.required, Validators.pattern('[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]')])],
        'isDemo': [video.isDemo],
        'timeKeys': this.fb.array(timeKeys),
        'subts': this.fb.group({
          'en': this.fb.array(subtsEn),
          'ru': this.fb.array(subtsRu)
        })
      });
    });

    this.videoForm = this.fb.group({
      'id': [null, Validators.compose([Validators.required, Validators.pattern('[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]')])],
      'isDemo': [false],
      'timeKeys': this.fb.array([]),
      'subts': this.fb.group({
        'en': this.fb.array([]),
        'ru': this.fb.array([])
      })
    });
  }

  onSubmit(){
    this.api.updateVideoSubts(this.video['videoId'], this.videoForm.value).subscribe(res => {
      console.log(res);
    });
  }

  addSubt(param){

  }

}
