import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { environment } from './../../../../environments/environment';

import { ApiService } from './../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private roleCodes: {
    guest: number,
    user: number,
    admin: number
  };

  private roleSubj: BehaviorSubject<number>;

  constructor(private api: ApiService) {
    this.roleCodes = environment.roleCodes;
    let currentRole = +localStorage.getItem('roleCode') || this.roleCodes.guest;
    this.roleSubj = new BehaviorSubject(currentRole);
  }

  get role(){
    return this.roleSubj;
  }

  setRole(roleCode: number){
    if(roleCode === this.roleCodes.user || roleCode === this.roleCodes.admin){
      localStorage.setItem('roleCode', roleCode.toString());
      this.roleSubj.next(roleCode);
    }
    else {
      localStorage.setItem('roleCode', this.roleCodes.guest.toString());
      this.roleSubj.next(this.roleCodes.guest);
    }
  }

  removeRole(): void{
    localStorage.removeItem('roleCode');
    this.roleSubj.next(this.roleCodes.guest);
  }

  checkRoleAsync(){
    this.api.getRole().subscribe( roleObj => {
      if(roleObj.roleCode !== this.roleSubj.getValue()){
        this.setRole(roleObj.roleCode);
      }
    });
  }

}
