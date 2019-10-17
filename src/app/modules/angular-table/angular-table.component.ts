import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, throwError } from 'rxjs';
import { Lenguaje } from './../../interfaces/interfaces';

@Component({
  selector: 'app-angular-table',
  templateUrl: './angular-table.component.html',
  styleUrls: ['./angular-table.component.css']
})

export class AngularTableComponent implements OnInit {

  //Se define la variable con su respectivo modelo de dato
  lenguajes: Observable<Lenguaje[]>;

  //Dentro del constructor se inyecta el servicio de datos
  constructor( private dataService: DataService ) { }

  //En el OnInit de hace la llamada al servicio
  ngOnInit() {
    this.lenguajes = this.dataService.getLenguajeOptions();
  }

}
