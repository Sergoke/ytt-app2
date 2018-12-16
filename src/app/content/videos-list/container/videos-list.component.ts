import { Component, OnInit } from '@angular/core';

import { DbService } from './../../../shared/services/db.service';
import { _MatDatepickerContentMixinBase } from '@angular/material';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  constructor(
    private db: DbService
  ) { }

  ngOnInit() {
    this.db.getVideoIds().subscribe( ids => console.log(ids));
  }

}
