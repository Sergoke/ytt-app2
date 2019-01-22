import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

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

  private roleSubj: BehaviorSubject<string>;

  constructor(private api: ApiService) {
    let currentRole = localStorage.getItem('role') || this.roles.guest
    this.roleSubj = new BehaviorSubject(currentRole);
  }

  get role(){
    return this.roleSubj;
  }

  setRole(role){
    if(role === this.roles.user || role === this.roles.admin){
      localStorage.setItem('role', role);
      this.roleSubj.next(role);
    }
    else {
      localStorage.setItem('role', this.roles.guest);
      this.roleSubj.next(this.roles.guest);
    }
  }

  removeRole(): void{
    localStorage.removeItem('role');
    this.roleSubj.next(this.roles.guest);
  }

  checkRoleAsync(){
    this.api.getRole().subscribe( roleObj => {
      if(roleObj.role !== this.roleSubj.getValue()){
        this.setRole(roleObj.role);
      }
    });
  }

}
