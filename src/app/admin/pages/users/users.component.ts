import { Component, OnInit } from '@angular/core';
import { ApiAdminService } from '../../services/api-admin/api-admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$;
  cols = ['login', 'name', 'surname', 'email', 'roleCode'];

  constructor(
    public apiAdmin: ApiAdminService
  ) { }

  ngOnInit() {
    this.apiAdmin.getUsers().subscribe(users => {
      console.log(users);
    });

    this.users$ = this.apiAdmin.getUsers();
  }

  deleteUser(login: string){
    alert('Are you sure you want delete ' + login + '?');
  }

}
