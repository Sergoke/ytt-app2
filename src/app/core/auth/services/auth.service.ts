import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { RolesService } from './../../../shared/services/roles/roles.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:2500/api/auth/';

  constructor(
    private http: HttpClient,
    private roles: RolesService
  ) { }

  login(user){
    console.log(user);
    return this.http.post(this.authUrl + 'login', user, {}).pipe(
      map((res: any) => {
        console.log(res);
        // res = res.json();
        this.roles.setRole(res.role);
        return res;
      })
    );
  }
}
