import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularTableRoutingModule } from './angular-table-routing.module';
import { AngularTableComponent } from './angular-table.component';

@NgModule({
  declarations: [AngularTableComponent],
  imports: [
    CommonModule,
    AngularTableRoutingModule
  ]
})
export class AngularTableModule { }
