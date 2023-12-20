import { Component, AfterViewInit, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSortModule, Sort, MatSort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatFormFieldModule,MatSortModule,MatCardModule,MatInputModule],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent implements AfterViewInit, OnInit{
  ngOnInit(): void { }

  constructor(private _liveAnnouncer: LiveAnnouncer) { }
  displayedColumns:string[] = COLUMNS_SCHEMA.map((col)=>col.column);
  columnsSchema:{column:string,name:string}[] = COLUMNS_SCHEMA;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Elementos por página';
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


const COLUMNS_SCHEMA  = [
  {column:'folio', name:'Folio hola buenas.'},
  {column:'numrecb', name:'Número de recibo.'},
  {column:'mdf', name:'MDF.'},
  {column:'frecibo', name:'Fecha Recibo.'},
  {column:'hrecibo', name:'Hora Recibo.'},
  {column:'rcp_pre', name:'RCP Pre.'},
  {column:'num_lista', name:'Número de Lista.'},
  {column:'entiempo', name:'En tiempo.'},
  {column:'catgpoe', name:'Cat. Grupo Ente.'},
  {column:'fechaprograr', name:'Fecha programada.'},
  {column:'o1', name:'O.'},
  {column:'entefisc', name:'Ente fiscalizado.'},
  {column:'o2', name:'O.'},
  {column:'entefiscaux', name:'Ente fiscalizado Auxiliar.'},
  {column:'admin', name:'Administración.'},
  {column:'clave', name:'Clave.'},
  {column:'descripcion', name:'Descripción.'},
  {column:'idem', name:'IdeM.'},
  {column:'nombreremite', name:'Nombre Remitente.'},
  {column:'cargo', name:'Cargo.'},
]

export interface PeriodicElement {
  folio: number;
  numrecb: number;
  mdf: string;
  frecibo:string;
  hrecibo:string;
  rcp_pre: string|null;
  num_lista: string|null;
  entiempo: string;
  catgpoe: string|null;
  fechaprograr: string|null;
  o1:number|null;
  entefisc:string;
  o2:number|null;
  entefiscaux:string|null;
  admin: string;
  clave: number;
  descripcion: string;
  idem:number;
  nombreremite:string;
  cargo:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {folio: 2232, numrecb: 200202232,   mdf: 'No', frecibo: '17/05/2002', hrecibo: '13:33:39', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2002-2005',clave: 1602,descripcion:'Acajete',idem:102,nombreremite: 'Fidel Flores Jiménez',cargo:'Presidente Municipal Constitucional'},
  {folio: 57622, numrecb: 200515185,  mdf: 'No', frecibo: '17/06/2005', hrecibo: '14:11:18', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2005-2008',clave: 1602,descripcion:'Acajete',idem:105,nombreremite: 'Roberto Alejandro contreras Bretón',cargo:'Presidente Municipal Constitucional'},
  {folio: 110027, numrecb: 200809208, mdf: 'No', frecibo: '18/03/2008', hrecibo: '19:11:34', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2005-2008',clave: 1602,descripcion:'Acajete',idem:106,nombreremite: 'Roberto Alejandro contreras Bretón',cargo:'Exresidente Municipal Constitucional'},
  {folio: 117899, numrecb: 200817080, mdf: 'No', frecibo: '23/06/2008', hrecibo: '14:53:31', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2008-2011',clave: 1602,descripcion:'Acajete',idem:106,nombreremite: 'Carmelo Montero Barranco',cargo:'Presidente Municipal Constitucional'},
  {folio: 171550, numrecb: 201110569, mdf: 'No', frecibo: '29/03/2011', hrecibo: '14:40:42', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2008-2011',clave: 1602,descripcion:'Acajete',idem:107,nombreremite: 'Carmelo Montero Barranco',cargo:'Exresidente Municipal Constitucional'},
  {folio: 172726, numrecb: 201111745, mdf: 'No', frecibo: '11/04/2011', hrecibo: '12:00:51', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2011-2014',clave: 1602,descripcion:'Acajete',idem:107,nombreremite: 'Rogeliio León Barranco',cargo:'Presidente Municipal Constitucional'},
  {folio: 229637, numrecb: 201403923, mdf: 'No', frecibo: '17/02/2014', hrecibo: '14:58:53', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2011-2014',clave: 1602,descripcion:'Acajete',idem:108,nombreremite: 'Rogeliio León Barranco',cargo:'Exresidente Municipal Constitucional'},
  {folio: 247457, numrecb: 201421518, mdf: 'No', frecibo: '13/10/2014', hrecibo: '13:07:43', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2014-2018',clave: 1602,descripcion:'Acajete',idem:108,nombreremite: 'Lic. Osvaldo Solano González',cargo:'Presidente Municipal Constitucional'},
  {folio: 243632, numrecb: 201417712, mdf: 'No', frecibo: '20/06/2014', hrecibo: '15:05:30', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2014-2018',clave: 1602,descripcion:'Acajete',idem:109,nombreremite: 'Osvaldo Solano González',cargo:'Presidente Municipal Constitucional'},
  {folio: 253363, numrecb: 201503042, mdf: 'No', frecibo: '13/02/2015', hrecibo: '15:42:26', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2014-2018',clave: 1602,descripcion:'Acajete',idem:109,nombreremite: 'Antonio Aguilar Reyes',cargo:'Presidente Municipal Constitucional'},
  {folio: 330983, numrecb: 201818424, mdf: 'No', frecibo: '18/10/2018', hrecibo: '10:56:25', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2014-2018',clave: 1602,descripcion:'Acajete',idem:110,nombreremite: 'Antonio Aguilar Reyes',cargo:'Presidente Municipal Constitucional'},
  {folio: 339548, numrecb: 201903413, mdf: 'No', frecibo: '18/02/2019', hrecibo: '16:42:18', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2018-2021',clave: 1602,descripcion:'Acajete',idem:110,nombreremite: 'Roberto ramírez Cervantes',cargo:'Presidente Municipal Constitucional'},
  {folio: 422496, numrecb: 202144873, mdf: 'No', frecibo: '18/10/2021', hrecibo: '10:19:07', rcp_pre:null, num_lista:null, entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2018-2021',clave: 1602,descripcion:'Acajete',idem:110,nombreremite: 'Roberto ramírez Cervantes',cargo:'Presidente Municipal Constitucional'},
  {folio: 426040, numrecb: 202148417, mdf: 'No', frecibo: '20/12/2021', hrecibo: '15:45:57', rcp_pre:'126492', num_lista:'202103937',entiempo: 'No',catgpoe: null, fechaprograr: null, o1:0, entefisc: 'Municipio',o2:null, entefiscaux: null,admin: '2021-2024',clave: 1602,descripcion:'Acajete',idem:111,nombreremite: 'David Meléndez López',cargo:'Presidente Municipal Constitucional'}
 
];