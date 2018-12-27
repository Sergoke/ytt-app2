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

  constructor(
    private http: HttpClient,
    private roles: RolesService,
    private router: Router
  ) { }

  login(user: {}){
    return this.http.post('/api/login', user, {}).pipe(
      map((res: any) => {
        this.roles.setRole(res.role);
        return res;
      })
    );
  }

  signup(user: {}){
    return this.http.post('/api/signup', user, {}).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  logout(){
    this.http.post('/api/logout', {}, {responseType: 'text'}).subscribe(res => {
      console.log(res);

      this.roles.removeRole();
      this.router.navigate(['/home']);
    });
  }

}