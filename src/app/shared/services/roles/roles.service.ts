import { Injectable } from '@angular/core';

import { ApiService } from './../api/api.service';

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

    console.log('setted role: ' + this.role);
  }

  getAndSetRoleFromServer(){
    if(!this.isRoleSetted){
      this.isRoleSetted = true;
      this.api.getRole().subscribe( roleObj => {
        this.setRole(roleObj.role);
      });
    }
  }

  getRole(): string{
    return this.role;
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
