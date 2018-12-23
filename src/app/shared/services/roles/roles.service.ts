import { Injectable } from '@angular/core';

import { ApiService } from './../api/api.service';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private roles = {
    guest: 'guest',
    user: 'user',
    admin: 'admin'
  }

  private role = this.roles.guest;
  private isRoleSetted = false;

  constructor(private api: ApiService) { }

  setRole(role){
    if(role === this.roles.user || role === this.roles.admin){
      this.role = role;
    }

    else {
      this.role = this.roles.guest;
    }

    this.isRoleSetted = true;

    localStorage.setItem('role', this.role);

    console.log('setted role: ' + this.role);
  }

  getAndSetRoleFromServer(){
    if(!this.isRoleSetted){
      this.api.getRole().subscribe( roleObj => {
        this.setRole(roleObj.role);
      });
    }
  }

  getRoleAsync(): Observable<string>{
    if(!this.isRoleSetted){
      return this.api.getRole().pipe(
        map( roleObj => {
          this.setRole(roleObj.role);
          return this.role;
        })
      )
    }

    else{
      return Observable.create(observer => {
        observer.next(this.role);
      });
    }
  }

  getRole(): string{
    return this.role;
  }

  getRoleFromLocalStorage(){
    return localStorage.getItem('role');
  }

  isAuthorized(){
    return this.role !== this.roles.guest;
  }

  isGuest(): boolean{
    return this.role === this.roles.guest;
  }
  
  isUser(): boolean{
    return this.role === this.roles.user;
  }

  isAdmin(): boolean{
    return this.role === this.roles.admin;
  }
  
}
