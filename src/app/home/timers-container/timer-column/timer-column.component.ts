import {Component, Input} from '@angular/core';
import {TimerColumn} from "../../../shared/models/timer.model";

@Component({
  selector: 'app-timer-column',
  templateUrl: './timer-column.component.html',
  styleUrls: ['./timer-column.component.scss']
})
export class TimerColumnComponent {

  @Input()colName: TimerColumn;
}
