import { Component, OnInit } from '@angular/core';
//Se importa la interface desde el archivo general
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title: String = '¡Bienvenido a la Lista de componentes en Angular';

  
  //Se define el arreglo dinámico para las opciones del menú
  options: Componente[] = [];


  constructor() { }

  ngOnInit() {
  }

}
