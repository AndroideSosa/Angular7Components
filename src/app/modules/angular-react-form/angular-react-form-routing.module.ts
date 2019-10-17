import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularReactFormComponent } from 'src/app/modules/angular-react-form/angular-react-form.component';

const routes: Routes = [
  {
    path: '',
    component: AngularReactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularReactFormRoutingModule { }
