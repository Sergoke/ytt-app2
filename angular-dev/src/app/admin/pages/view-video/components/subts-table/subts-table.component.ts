import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'subts-table',
  templateUrl: './subts-table.component.html',
  styleUrls: ['./subts-table.component.scss']
})
export class SubtsTableComponent implements OnInit {

  @Input() video$: Observable<any>;

  video: any;

  constructor() { }

  ngOnInit() {
    this.video$.subscribe(video => {
      this.video = video;
    });
  }

}
