import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  @Input() private msg: string;
  @Input() private type: string = 'error';

  @Output() private onClose = new EventEmitter();

  ngOnInit(){
    
  }

  close(){
    this.onClose.emit();
  }

}
