import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-mat',
  templateUrl: './table-mat.component.html',
  styleUrls: ['./table-mat.component.scss'],
})
export class TableMatComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() displayedColumns: string[] = [];
  @Input() dataInput;

  dataSource = new MatTableDataSource<FormData>();
  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<FormData>(this.dataInput);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
