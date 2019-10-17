import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//Se hace la importacion de la interfaz/modelo definido para recibir la información
import { Componente, Lenguaje, Select } from './../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }


  //Llamada al servicio para obtener las opciones del menú de forma dinámica.
  getMenuOptions(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  //Llamada al servicio para obtener las opciones en el componente select
  getSelectOptions(){
    return this.http.get<Select[]>('/assets/data/select.json');

  } 

  //Llamada al servicio para obtener las opciones en el componente de tabla
  getLenguajeOptions(){
    return this.http.get<Lenguaje[]>('/assets/data/info.json');
  }

}
