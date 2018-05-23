import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatCardModule  } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { QuantService } from '../services/quant.service';
import { Quant } from './quant-interface';

import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-quant',
  templateUrl: './quant.component.html',
  styleUrls: ['./quant.component.css']
})
export class QuantComponent implements OnInit{

  strategies: any[];

  constructor(private quantService: QuantService, private db: AngularFireDatabase){}

  displayedColumns = ['position', 'name', 'performance', 'datasource', 'code', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit(){
/*    
    //Call the quant service using Observables
    this.quantService.getAll()
      .subscribe(
        (data: Quant) => console.log(data),
        error => alert(error)
      )
*/
    this.db.list('/strategies').snapshotChanges().subscribe(item => console.log(item) );
    


  }

}

export interface Element {
  name: string;
  position: number;
  performance: number;
  datasource: string;
  code: string;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Algorithm min max', performance: 1.0079,  datasource: 'bloomberg', code: 'python', symbol: 'AMN'},
  {position: 2, name: 'Algorithm delta', performance: 1.0079,  datasource: 'reuters', code: 'c++',symbol: 'DEL'},
];