import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormControl, FormGroup, FormArray, AbstractControl } from '@angular/forms';

import { ApiService } from './../../../../../shared/services/api/api.service';
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

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) {
    this.videoForm = this.fb.group({
      'id': ['wwwwwwwwwww', Validators.compose([Validators.required, Validators.pattern('[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]')])],
      'isDemo': [false],
      'timeKeys': this.fb.array([])
    });

    this.timeKeyControls = this.videoForm.get('timeKeys') as FormArray;

    this.addTimeKey();

    // this.videoForm.valueChanges.subscribe(status => {
    //   console.log(status);
    //   console.log(this.timeKeyControls.at(this.timeKeyControls.length - 1));
    // });

  }

  private onSubmit(){
    this.api.addVideo(this.videoForm.value).subscribe(res => {
      console.log(res);
    });
  }

  private addTimeKey(){
    this.timeKeyControls.push(this.createTimeKey());
  }

  private createTimeKey(){
    return this.fb.control(null, [Validators.required]);
  }

  private onTimeKeyFocus(index){
    if(index === this.timeKeyControls.length - 1){
      console.log('yes');
      this.addTimeKey();
    }
  }

  private onTimeKeyFocusOut(index){
    if(index === this.timeKeyControls.length - 2 && this.timeKeyControls.at(index).value == null){
      setTimeout(() => {
        console.log('out');
        this.removeLastTimeKey();
      }, 2);
    }
  }

  private removeLastTimeKey(){
    if(this.timeKeyControls.length > 1){
      this.timeKeyControls.removeAt(this.timeKeyControls.length - 1);
    }
  }

  private onTimeKeyClicked(){
    console.log('click')
  }

}
