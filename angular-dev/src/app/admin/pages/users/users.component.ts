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
    this.users$ = this.apiAdmin.getUsers();
  }

  deleteUser(login: string){
    let confirmed = confirm('Are you sure you want to delete ' + login + '?');
    if(confirmed){
      this.apiAdmin.deleteUser(login).subscribe(res => {
        alert(login + ' successfully deleted!');
        this.users$ = this.apiAdmin.getUsers();
      });
    }
  }

}
