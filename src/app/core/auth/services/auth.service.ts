import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:2500/';

  constructor(
    private http: HttpClient
  ) { }

  login(user){
    console.log(user);
    return this.http.post(this.authUrl + 'login', user, {});
  }
}
