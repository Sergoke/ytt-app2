import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslService {

  url = '/api/translate/';

  constructor(
    private http: HttpClient
  ) { }

  translate(word: string): Observable<any>{
    return this.http.get(this.url + word);
  }
}
