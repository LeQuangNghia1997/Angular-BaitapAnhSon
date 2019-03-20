import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private config = {
    headerHeight: 50,
    leftHeight: 350,
    rightHeight: 350
  };
  readonly SMALL_GAP = 10;

  increaseHeaderHeight() {
    this.config.headerHeight += this.SMALL_GAP;
    this.config.leftHeight -= this.SMALL_GAP;
    this.config.rightHeight -= this.SMALL_GAP;
  }

  decreaseHeaderHeight() {
    this.config.headerHeight -= this.SMALL_GAP;
    this.config.leftHeight += this.SMALL_GAP;
    this.config.rightHeight += this.SMALL_GAP;
  }

  get headerHeight(): number {
    return this.config.headerHeight;
  }

  set headerHeight(value: number) {
    this.config.headerHeight = value;
  }

  get leftHeight(): number {
    return this.config.leftHeight;
  }

  set leftHeight(value: number) {
    this.config.leftHeight = value;
  }

  get rightHeight(): number {
    return this.config.rightHeight;
  }

  set rightHeight(value: number) {
    this.config.rightHeight = value;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
