import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularSelectRoutingModule } from './angular-select-routing.module';
import { AngularSelectComponent } from './angular-select.component';

@NgModule({
  declarations: [AngularSelectComponent],
  imports: [
    CommonModule,
    AngularSelectRoutingModule
  ]
})
export class AngularSelectModule { }
