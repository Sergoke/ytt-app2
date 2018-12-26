import { Component } from '@angular/core';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {

  constructor(
    private auth: AuthService
  ) { }

}
