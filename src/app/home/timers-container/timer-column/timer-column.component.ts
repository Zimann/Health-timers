import {Component, Input, OnInit} from '@angular/core';
import {TimerTitle} from "../../../shared/models/timer.model";

@Component({
  selector: 'app-timer-column',
  templateUrl: './timer-column.component.html',
  styleUrls: ['./timer-column.component.scss']
})
export class TimerColumnComponent implements OnInit {

  @Input()colName: TimerTitle;
  constructor() { }

  ngOnInit(): void {
  }

}
