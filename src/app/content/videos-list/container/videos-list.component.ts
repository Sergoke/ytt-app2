import { Component, OnInit } from '@angular/core';

import { DbService } from './../../../shared/services/db.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  videos;

  constructor(
    private db: DbService
  ) { }

  ngOnInit() {
    this.videos = this.db.getVideos();
  }

}
