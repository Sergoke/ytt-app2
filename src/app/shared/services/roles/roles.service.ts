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

  constructor(private api: ApiService) { }

  setRole(role){
    if(role === this.roles.user || role === this.roles.admin){
      localStorage.setItem('role', role);
    }
    else {
      localStorage.setItem('role', this.roles.guest);
    }

    console.log('setted role: ' + localStorage.getItem('role'));
  }

  getRole(): string{
    return localStorage.getItem('role') || this.roles.guest;
  }

  get role(){
    return localStorage.getItem('role');
  }

  removeRole(): void{
    localStorage.removeItem('role');
  }

  checkRoleAsync(){
    this.api.getRole().subscribe( roleObj => {
      this.setRole(roleObj.role);
    });
  }

}
