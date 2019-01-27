import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './../../../core/services/api/api.service';
import { RolesService } from './../../../core/services/roles/roles.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  videos$: Observable<[]>;
  videos = [];
  fetchingNew = false;
  noMoreVideos = false;
  
  constructor(
    private api: ApiService,
    public roles: RolesService
  ) { }

  ngOnInit() {
    this.getVideos(20);
  }

  getVideos(num){
    this.api.getVideos(num, this.videos.length).subscribe(videos => {
      videos.forEach(video => {
        this.videos.push(video);
      });

      if(videos.length < num){
        this.noMoreVideos = true;
      }
      this.fetchingNew = false;
    });
  }

  onScroll(){
    if(this.fetchingNew || this.noMoreVideos) return;
    this.fetchingNew = true;
    setTimeout(() => this.getVideos(10), 600);
  }

}
