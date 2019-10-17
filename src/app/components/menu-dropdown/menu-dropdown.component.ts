import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, throwError } from 'rxjs';
import { Componente } from './../../interfaces/interfaces';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.css']
})
export class MenuDropdownComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

}
