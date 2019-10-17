import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Select } from './../../interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-select',
  templateUrl: './angular-select.component.html',
  styleUrls: ['./angular-select.component.css']
})
export class AngularSelectComponent implements OnInit {

  //Se declara la variable que se manda como parametro al componente
  titulo:string='Angular Select';

  // Variables para Select Angular Básico
  //Se define la variable como Observable con su respectivo modelo de datos 
  opciones$: Observable<Select[]>;
 
  // Variables pata Select Angular Reactivo)
  userForm: FormGroup; 

  selectedOrg: Select;

  // Variables para Select Dependiente
  selectActive: boolean = true;

  //Dentro del constructor se inyecta el servicio de datos
  constructor( private dataService: DataService,
               private formBuilder: FormBuilder) { }

  //En el OnInit de hace la llamada al servicio para obtener el listado de opciones.
  ngOnInit() {
    this.opciones$ = this.dataService.getSelectOptions();

    //Se declara la inicialización de componentes de userForm
    this.userForm = this.formBuilder.group({
      profile: [null, [ Validators.required ] ],
      userName: ['', [ Validators.required ] ],
      technologies:  [null, [ Validators.required ] ]
    });

  }

  //Función para obtener el valor dentro del Select Angular Básico
  getValue(value){
    this.selectedOrg = value;
    console.log(this.selectedOrg); 
  }

  //Función para obtener valor dentro del Select Dependiente
  getSelectValue(value){
    
    //Condición para activar select
    if( value!=0 ){
      this.selectActive = false;
    }

  }
}
