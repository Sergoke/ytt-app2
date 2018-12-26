import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { RolesService } from './../../../shared/services/roles/roles.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:2500/';

  constructor(
    private http: HttpClient,
    private roles: RolesService,
    private router: Router
  ) { }

  login(user: {}){
    return this.http.post(this.authUrl + 'login', user, {}).pipe(
      map((res: any) => {
        this.roles.setRole(res.role);
        return res;
      })
    );
  }

  logout(){
    this.http.post(this.authUrl + 'log-out', {}, {}).subscribe(res => {
      console.log(res);

      this.roles.removeRole();
      this.router.navigate(['/home']);
    });
  }

}