import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { AngularReactFormComponent } from 'src/app/modules/angular-react-form/angular-react-form.component';
import { AngularSelectComponent } from 'src/app/modules/angular-select/angular-select.component';
import { AngularTableComponent } from 'src/app/modules/angular-table/angular-table.component';

const routes: Routes = [
  
  {
    path: 'admin',
    component: AdminComponent},
      {
        path: 'angular-react-form',
        component: AngularReactFormComponent
      },
      {
        path: 'angular-select',
        component: AngularSelectComponent
      },
      {
        path: 'angular-table',
        component: AngularTableComponent
      }
  ,
  { path: '**', redirectTo: 'admin'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
