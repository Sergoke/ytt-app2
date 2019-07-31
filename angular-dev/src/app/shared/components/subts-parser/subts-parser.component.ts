import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-subts-parser',
  templateUrl: './subts-parser.component.html',
  styleUrls: ['./subts-parser.component.scss']
})
export class SubtsParserComponent {

  constructor(
    private dialogRef: MatDialogRef<SubtsParserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  parseSubts(subts: string) {
    let result = subts.split('\n');
    result = result
      .map(item => item.trim())
      .filter(item => item.length);
    this.dialogRef.close(result);
  }

}
