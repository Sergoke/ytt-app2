import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-subts-parser',
  templateUrl: './subts-parser.component.html',
  styleUrls: ['./subts-parser.component.css']
})
export class SubtsParserComponent {

  constructor(
    private dialogRef: MatDialogRef<SubtsParserComponent>
  ) { }

  parseSubts(subts: string){
    let result = subts.split('\n');
    result = result.filter(item => item.length);
    this.dialogRef.close(result);
  }

}
