import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, throwError } from 'rxjs';
import { Componente } from './../../interfaces/interfaces';

@Component({
  selector: 'app-menu-collapse',
  templateUrl: './menu-collapse.component.html',
  styleUrls: ['./menu-collapse.component.css']
})
export class MenuCollapseComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }
}
