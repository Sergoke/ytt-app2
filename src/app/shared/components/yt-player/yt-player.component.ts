import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.css']
})
export class YtPlayerComponent implements OnInit {

  @Input() videoId: string;

  constructor() { }

  ngOnInit() {
    
  }

}
