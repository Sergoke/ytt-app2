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
    return this.http.get('http://localhost:2500/api/role');
  }

  getVideos(): Observable<any>{
    return this.http.get('http://localhost:2500/api/videos');
  }

  getSubtitles(videoId: string): Observable<any>{
    return this.http.get('http://localhost:2500/api/video/' + videoId);
  }
  
}
