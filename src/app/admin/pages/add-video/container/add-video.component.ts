import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormControl, FormGroup, FormArray, AbstractControl } from '@angular/forms';

import { ApiService } from './../../../../core/services/api/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent {

  videoForm: FormGroup;
  subscribedTimeKey: Subscription;
  timeKeyControls: FormArray;
  subtGroup: FormGroup;

  parseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService
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
      'updateOrAdd': ['1'],
      'timeKeys_or_EN_or_RU': ['2']
    });

    // this.videoForm.valueChanges.subscribe(status => {
    //   console.log(status);
    //   console.log(this.timeKeyControls.at(this.timeKeyControls.length - 1));
    // });

  }

  onSubmit(){
    console.log(this.videoForm.value);
    this.api.addVideo(this.videoForm.value).subscribe(res => {
      console.log(res);
    });
  }

  public addSubt(num){
    for(let i = 0; i < num; i++){
      this.timeKeyControls.push(this.fb.control(null, [Validators.required]));
      (this.subtGroup.get('en') as FormArray).push(this.fb.control(null, [Validators.required]));
      (this.subtGroup.get('ru') as FormArray).push(this.fb.control(null, [Validators.required]));
    }
  }

  private removeSubt(i: number){
    this.timeKeyControls.removeAt(i);
    (this.subtGroup.get('en') as FormArray).removeAt(i);
    (this.subtGroup.get('ru') as FormArray).removeAt(i);
  }

  private removeLastTimeKey(){
    if(this.timeKeyControls.length > 1){
      this.timeKeyControls.removeAt(this.timeKeyControls.length - 1);
    }
  }

  public parseSubts(subts: string){

    console.log(this.parseForm.value);

    let result = subts.split('\n');

    if(this.parseForm.get('updateOrAdd').value === '1'){
      if(this.parseForm.get('timeKeys_or_EN_or_RU').value === '1'){
        this.timeKeyControls.setValue(result);
      }

      else if(this.parseForm.get('timeKeys_or_EN_or_RU').value === '2'){
        (this.subtGroup.get('en') as FormArray).setValue(result);
      }

      else if(this.parseForm.get('timeKeys_or_EN_or_RU').value === '3'){
        (this.subtGroup.get('ru') as FormArray).setValue(result);
      }
    }

    else {
      while(this.timeKeyControls.length !== 0){
        this.timeKeyControls.removeAt(0);
        (this.subtGroup.get('en') as FormArray).removeAt(0);
        (this.subtGroup.get('ru') as FormArray).removeAt(0);
      }

      if(this.parseForm.get('timeKeys_or_EN_or_RU').value === '1'){
        result.forEach(string => {
          this.timeKeyControls.push(this.fb.control(string, [Validators.required]));
          (this.subtGroup.get('en') as FormArray).push(this.fb.control(null, [Validators.required]));
          (this.subtGroup.get('ru') as FormArray).push(this.fb.control(null, [Validators.required]));
        });
      }
  
      else if(this.parseForm.get('timeKeys_or_EN_or_RU').value === '2'){
        result.forEach(string => {
          this.timeKeyControls.push(this.fb.control(null, [Validators.required]));
          (this.subtGroup.get('en') as FormArray).push(this.fb.control(string, [Validators.required]));
          (this.subtGroup.get('ru') as FormArray).push(this.fb.control(null, [Validators.required]));
        });
      }
  
      else if(this.parseForm.get('timeKeys_or_EN_or_RU').value === '3'){
        result.forEach(string => {
          this.timeKeyControls.push(this.fb.control(null, [Validators.required]));
          (this.subtGroup.get('en') as FormArray).push(this.fb.control(null, [Validators.required]));
          (this.subtGroup.get('ru') as FormArray).push(this.fb.control(string, [Validators.required]));
        });
      }
    }

  }

}
