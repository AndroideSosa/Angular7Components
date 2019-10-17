import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularSelectComponent } from 'src/app/modules/angular-select/angular-select.component';

const routes: Routes = [
  {
    path: '',
    component: AngularSelectComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports: [RouterModule]
})
export class AngularSelectRoutingModule { }
