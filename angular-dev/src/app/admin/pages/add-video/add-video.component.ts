import { Component } from '@angular/core';
import { AdminApiService } from '../../services/api-admin/admin-api.service';
import { Video } from '../../../shared/models';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent {
  video: Video;

  constructor(private apiAdmin: AdminApiService) {
    this.video = {
      id: '',
      isDemo: false,
      timeKeys: [1],
      subts: {
        en: [
          ''
        ]
      }
    }
  };

  onSubmit(video: Video) {
    console.log(video);
    this.apiAdmin.addVideo(video).subscribe(res => {
      console.log(res);
    });
  }

}
