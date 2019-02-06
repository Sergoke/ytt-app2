import { Component, OnInit, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { MatTable } from '@angular/material';
import { ApiService } from './../../../core/services/api/api.service';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;

  videoId: string;
  video: Object;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) { 
    this.route.params.subscribe(params => {
      this.videoId = params.id;
      this.api.getSubtitles(params.id).subscribe(
      res => {
        this.video = res;
        this.table.renderRows();
        console.log(res);
      },
      err => {
        this.router.navigate(['/404']);
      });
    });
  }

  ngOnInit() {
  }

}
