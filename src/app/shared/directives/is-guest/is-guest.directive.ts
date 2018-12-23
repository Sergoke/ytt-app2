import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { RolesService } from './../../services/roles/roles.service';

@Directive({
  selector: '[isGuest]'
})
export class IsGuestDirective implements OnInit {

  @Input() private isGuest: boolean;

  constructor(
    private roles: RolesService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    console.log('isGuestDirective');
  }

  ngOnInit(){
    this.roles.getRoleAsync().subscribe(role => {
      if(this.isGuest && role === 'guest' || !this.isGuest && role !== 'guest'){
        this.viewContainer.createEmbeddedView(this.templateRef);
        console.log('showed: is guest');
      }

      else{
        this.viewContainer.clear();
        console.log('cleared: is not guest');
      }
    });
  }

}