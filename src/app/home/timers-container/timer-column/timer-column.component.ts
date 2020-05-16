import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer-column',
  templateUrl: './timer-column.component.html',
  styleUrls: ['./timer-column.component.scss']
})
export class TimerColumnComponent implements OnInit {

  @Input()colName;
  constructor() { }

  ngOnInit(): void {
  }

}
