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
    console.log('hello from is-gest directive!!!')
    // this.roles.getRoleAsync().subscribe(role => {
      var role = this.roles.role;

      if(this.isGuest && role === 'guest' || !this.isGuest && role !== 'guest'){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }

      else{
        this.viewContainer.clear();
      }
    // });
  }

}