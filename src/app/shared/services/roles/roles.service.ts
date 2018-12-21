import { Injectable } from '@angular/core';

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

  constructor() { }

  setRole(role){
    if(role === this.roles.user || role === this.roles.admin){
      this.role = role;
    }

    else {
      this.role = this.roles.guest;
    }

    console.log('setted role: ' + this.role);
  }

  getRole(): string{
    return this.role;
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
