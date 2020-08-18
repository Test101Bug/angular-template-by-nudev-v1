import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import Menu from '../../config/memu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild(MatDrawer) public drawer: MatDrawer
  showFiller = false;
   listMenu = Menu;
  constructor() { }

  ngOnInit(): void {
  }

}
