import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Video } from '../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getRole(): Observable<any> {
    return this.http.get('/api/role');
  }

  getVideos(num, skip = 0): Observable<any> {
    let res = this.http.get('/api/videos?num=' + num + '&skip=' + skip);
    res.subscribe(console.log);
    return res;
  }

  getVideo(videoId: string): Observable<Video> {
    return this.http.get<Video>(`/api/videos/${videoId}`);
  }

  getUserData(){
    return this.http.get('/api/user');
  }
}
