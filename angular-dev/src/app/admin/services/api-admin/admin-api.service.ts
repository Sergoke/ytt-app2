import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../../../shared/models';

@Injectable()
export class AdminApiService {

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

  updateVideo(video: Video) {
    return this.http.post(`/api/video/update/${video.id}`, video);
  }
}
