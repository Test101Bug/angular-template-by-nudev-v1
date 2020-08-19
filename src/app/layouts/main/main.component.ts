import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import Menu from '../../config/memu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @ViewChild(MatDrawer) public drawer: MatDrawer;
  showFiller = false;
  menuItemIndex: number = 0;
  supItemIndex: number = 0;
  listMenu = Menu;
  constructor() {}

  ngOnInit(): void {}
  selectMenuItem(index) {
    if (this.menuItemIndex != index) this.supItemIndex = 0;
    this.menuItemIndex = index;
  }

  selectSupMenuItem(index) {
    if (this.supItemIndex != index) this.supItemIndex = index;
  }
}
