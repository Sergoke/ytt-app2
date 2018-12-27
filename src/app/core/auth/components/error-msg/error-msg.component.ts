import { Component, OnInit, Inject } from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public msg: any) { }

  ngOnInit() {
  }

}
