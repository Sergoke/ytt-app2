import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../services/api-admin/admin-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$;
  cols = ['login', 'name', 'surname', 'email', 'roleCode'];

  constructor(
    public apiAdmin: AdminApiService
  ) { }

  ngOnInit() {
    this.users$ = this.apiAdmin.getUsers();
  }

  deleteUser(login: string){
    let confirmed = confirm('Are you sure you want to delete ' + login + '?');
    if(confirmed){
      this.apiAdmin.deleteUser(login).subscribe(() => {
        alert(login + ' successfully deleted!');
        this.users$ = this.apiAdmin.getUsers();
      });
    }
  }

}
