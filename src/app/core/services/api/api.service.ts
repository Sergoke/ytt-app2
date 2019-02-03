import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getRole(): Observable<any>{
    return this.http.get('/api/role');
  }

  getVideos(num, skip = 0): Observable<any>{
    let res = this.http.get('/api/videos?num=' + num + '&skip=' + skip);
    res.subscribe(vids => console.log(vids))
    return res;
  }

  getSubtitles(videoId: string): Observable<any>{
    return this.http.get('/api/video/' + videoId);
  }

  getUserData(){
    return this.http.get('/api/user');
  }
}
