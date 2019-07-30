import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api/api.service';
import { AdminApiService } from '../../services/api-admin/admin-api.service';
import { Video } from '../../../shared/models';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss']
})
export class ViewVideoComponent {

  videoId: string;
  video: Object;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private adminApi: AdminApiService
  ) { 
    this.route.params.subscribe(params => {
      this.videoId = params.id;
      this.api.getVideo(params.id).subscribe(
      res => {
        this.video = res;
        console.log(res);
      },
      () => {
        this.router.navigate(['/404']);
      });
    });
  }

  onSubmit(video: Video) {
    this.adminApi.updateVideo(video).subscribe(console.log, console.error);
  }

  deleteVideo() {
    this.adminApi.deleteVideo(this.videoId).subscribe(console.log, console.error, console.info);
  }
}
