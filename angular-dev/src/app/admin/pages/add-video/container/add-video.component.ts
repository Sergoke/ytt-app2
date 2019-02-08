import { Component, ViewChild } from '@angular/core';

import { MatTable, MatDialog } from '@angular/material';

import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

import { ApiAdminService } from './../../../services/api-admin/api-admin.service';

import { SubtsParserComponent } from './../components/subts-parser/subts-parser.component';

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

  constructor(
    private fb: FormBuilder,
    private apiAdmin: ApiAdminService,
    private matDialog: MatDialog
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

  openParser(target: string){
    let dialogRef = this.matDialog.open(SubtsParserComponent, {width: '500px'});
    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      
      let resultInitialLength = result.length;
      if(resultInitialLength < this.timeKeyControls.length){
        result.length = this.timeKeyControls.length;
        result.fill('', resultInitialLength);
      }
      else if(resultInitialLength > this.timeKeyControls.length){
        this.addSubt(resultInitialLength - this.timeKeyControls.length);
      }
  
      if(target === 'keys'){
        this.timeKeyControls.setValue(result);
      }
  
      else if(target === 'en'){
        (this.subtGroup.get('en') as FormArray).setValue(result);
      }
  
      else if(target === 'ru'){
        (this.subtGroup.get('ru') as FormArray).setValue(result);
      }
  
      this.table.renderRows();
    });
  }

}
