import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { environment } from '../../../../environments/environment';

import { MatDialogsService } from '../../../core/services/mat-dialogs/mat-dialogs.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  roles = environment.roleCodes;
  mobileQuery;
  _mobileQueryListener;

  constructor(
    public matDialogs: MatDialogsService,
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef) {
      this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

}
