import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private http: HttpClient
  ) { }

  getVideos(): Observable<any>{
    return this.http.get('http://localhost:2500/data/videos');
  }

  getSubtitles(videoId: string): Observable<any>{
    return this.http.get('http://localhost:2500/data/subts/' + videoId);
  }
}
