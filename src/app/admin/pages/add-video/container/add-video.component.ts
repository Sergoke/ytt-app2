import { Component, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material';

import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

import { ApiAdminService } from './../../../services/api-admin/api-admin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent {

  @ViewChild(MatTable) table: MatTable<any>;

  videoForm: FormGroup;
  timeKeyControls: FormArray;
  subtGroup: FormGroup;

  parseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiAdmin: ApiAdminService
  ) {
    this.videoForm = this.fb.group({
      'id': [null, Validators.compose([Validators.required, Validators.pattern('[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]')])],
      'isDemo': [false],
      'timeKeys': this.fb.array([]),
      'subts': this.fb.group({
        'en': this.fb.array([]),
        'ru': this.fb.array([])
      })
    });

    this.timeKeyControls = this.videoForm.get('timeKeys') as FormArray;
    this.subtGroup = this.videoForm.get('subts') as FormGroup;

    this.addSubt(1);

    this.parseForm = this.fb.group({
      'timeKeys_or_EN_or_RU': ['2']
    });

  }

  onSubmit(){
    console.log(this.videoForm.value);
    this.apiAdmin.addVideo(this.videoForm.value).subscribe(res => {
      console.log(res);
    });
  }

  public addSubt(num){
    for(let i = 0; i < num; i++){
      this.timeKeyControls.push(this.fb.control(null, [Validators.required]));
      (this.subtGroup.get('en') as FormArray).push(this.fb.control(null, [Validators.required]));
      (this.subtGroup.get('ru') as FormArray).push(this.fb.control(null, [Validators.required]));
    }

    this.table && this.table.renderRows();
  }

  private removeSubt(i: number){
    this.timeKeyControls.removeAt(i);
    (this.subtGroup.get('en') as FormArray).removeAt(i);
    (this.subtGroup.get('ru') as FormArray).removeAt(i);

    this.table && this.table.renderRows();
  }

  parseSubts(subts: string){
    console.log(this.parseForm.value);

    let result = subts.split('\n');
    result = result.filter(item => item.length);
    let resultInitialLength = result.length;
    if(resultInitialLength < this.timeKeyControls.length){
      result.length = this.timeKeyControls.length;
      result.fill('', resultInitialLength);
    }
    else if(resultInitialLength > this.timeKeyControls.length){
      this.addSubt(resultInitialLength - this.timeKeyControls.length);
    }

    if(this.parseForm.get('timeKeys_or_EN_or_RU').value === '1'){
      this.timeKeyControls.setValue(result);
    }

    else if(this.parseForm.get('timeKeys_or_EN_or_RU').value === '2'){
      (this.subtGroup.get('en') as FormArray).setValue(result);
    }

    else if(this.parseForm.get('timeKeys_or_EN_or_RU').value === '3'){
      (this.subtGroup.get('ru') as FormArray).setValue(result);
    }

    this.table.renderRows();
  }

}
