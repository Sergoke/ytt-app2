import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RolesService } from './../../services/roles/roles.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private roles: RolesService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('guard');
      var roles = next.data.roles;

      return this.roles.role.pipe(
        map(currentRoleCode => {
          for(const allowedRoleCode of roles){
            if(allowedRoleCode === currentRoleCode) return true;
          }

          return false;
        })
      );
  }
}
