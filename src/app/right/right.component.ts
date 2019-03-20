import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  @Input() rightWidth: number;
  @Input() leftWidth: number;
  @Input() rightHeight: number;
  @Output() cliked = new EventEmitter<boolean>();
  click: boolean;
  increaseRightWidth(click: boolean) {
    this.click = click;
    this.cliked.emit(this.click);
  }
  decreaseRightWidth(click: boolean) {
    this.click = click;
    this.cliked.emit(this.click);
  }
  constructor() {
  }

  ngOnInit() {
  }

}
