import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../../../shared/models';

@Injectable()
export class ApiAdminService {

  constructor(
    public http: HttpClient) {
  }

  addVideo(video: Video) {
    return this.http.post('/api/add-video', video);
  }

  getUsers() {
    return this.http.get('/api/users');
  }

  deleteUser(login: string) {
    return this.http.post('/api/user/delete', {login});
  }

  updateVideoSubts(initialVideoId: string, video: Object) {
    return this.http.post('/api/video/update/' + initialVideoId, video);
  }
}
