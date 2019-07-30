import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../../../shared/models';

@Injectable()
export class AdminApiService {

  constructor(
    public http: HttpClient) {
  }

  addVideo(video: Video) {
    return this.http.post('/api/videos', video);
  }

  updateVideo(video: Video) {
    return this.http.put(`/api/videos/${video.id}`, video);
  }

  deleteVideo(id: string) {
    return this.http.delete(`/api/videos/${id}`);
  }

  getUsers() {
    return this.http.get('/api/users');
  }

  deleteUser(login: string) {
    return this.http.post('/api/user/delete', {login});
  }
}
