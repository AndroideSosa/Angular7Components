//Importaciones de elementos para su uso dentro de este módulo
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';
import { MenuCollapseComponent } from './menu-collapse/menu-collapse.component';

//Se definen las rutas que se ocuparan dentro del componente
const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];

@NgModule({
  declarations: [NavbarComponent, MenuDropdownComponent, MenuCollapseComponent],
  //Se hace la exportación de los módulos que se ocuparán en otras partes de la aplicación
  exports: [
    NavbarComponent,
    MenuDropdownComponent,
    MenuCollapseComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsModule { }
