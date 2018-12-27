import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../../shared/services/api/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  videos$: Observable<[]>;
  
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.videos$ = this.api.getVideos();
  }

}
