import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {

  @Input() msg: string;
  @Input() type: string = 'error';

  @Output() onClose = new EventEmitter<null>();

  close(){
    this.onClose.emit();
  }

}
