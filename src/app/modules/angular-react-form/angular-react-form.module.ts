import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularReactFormRoutingModule } from './angular-react-form-routing.module';
import { AngularReactFormComponent } from './angular-react-form.component';

@NgModule({
  declarations: [AngularReactFormComponent],
  imports: [
    CommonModule,
    AngularReactFormRoutingModule
  ]
})
export class AngularReactFormModule { 

 
}
