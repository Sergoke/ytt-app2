import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { RolesService } from './../../services/roles/roles.service';

@Directive({
  selector: '[isAdmin]'
})
export class IsAdminDirective implements OnInit{

  constructor(
    private roles: RolesService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { 
    console.log('admin directive');
  }

  ngOnInit(){
    // this.roles.getRoleAsync().subscribe(role => {
      var role = this.roles.role;
      
      if(role === 'admin'){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }

      else{
        this.viewContainer.clear();
      }
    // });
  }

}
