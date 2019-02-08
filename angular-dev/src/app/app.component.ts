import { Component } from '@angular/core';

import { RolesService } from './core/services/roles/roles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Youteng';

  constructor(
    public roles: RolesService
  ){
    this.roles.checkRoleAsync();
  }

  ngOnInit(){}

}