import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../../../../environments/environment';

import { MatDialogsService } from '../../../../core/services/mat-dialogs/mat-dialogs.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {

  @Input() mobile: boolean;
  roles = environment.roleCodes;

  constructor(
    public matDialogs: MatDialogsService,
  ){ }

}
