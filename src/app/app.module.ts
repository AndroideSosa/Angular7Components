import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AngularReactFormComponent } from 'src/app/modules/angular-react-form/angular-react-form.component';
import { AngularSelectComponent } from 'src/app/modules/angular-select/angular-select.component';
import { AngularTableComponent } from './modules/angular-table/angular-table.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AngularReactFormComponent,
    AngularSelectComponent,
    AngularTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
