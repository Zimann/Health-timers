import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import {CountDownTimer, TimerTitle} from "../../shared/models/timer.model";
import {CrossComponentCommunicationService} from '../../services/cross-component-communication.service';
import {CountdownService} from "../../services/countdown.service";
import {CountdownEvent} from "ngx-countdown";
import {TimerColumnComponent} from "./timer-column/timer-column.component";

@Component({
  selector: 'app-timers-container',
  templateUrl: './timers-container.component.html',
  styleUrls: ['./timers-container.component.scss']
})

export class TimersContainerComponent implements OnInit {

  colNames: TimerTitle[] = [
    {timerName: 'Stretching', timerIcon: 'fa-running'},
    {timerName: 'Workout', timerIcon: 'fa-dumbbell'},
    {timerName: 'Chilling', timerIcon: 'fa-couch'}
  ];
  countdownTimers: CountDownTimer[] = [];
  columnIndex: number;

  @Output()ringTheAlarm: EventEmitter<void> = new EventEmitter();
  @ViewChildren(TimerColumnComponent) timerColumnComponents: QueryList<TimerColumnComponent>;

  constructor(private crossComponentService: CrossComponentCommunicationService,
              private countDownService: CountdownService) {
  }

  handleCountdownStop(counterData: CountdownEvent) {
    if (counterData.left === 0) {
      this.ringTheAlarm.emit();
    }
  }

  ngOnInit(): void {
    const timerCategories = {};
    this.colNames.forEach(el => timerCategories[el.timerName.toLowerCase()]);
    this.crossComponentService.timerData$.subscribe((data: CountDownTimer) => {
      // TODO refactor this and try to ditch the array format for the countdownTimers
      // use just a plain object instead
      timerCategories[data.timerType.toLowerCase()] = {...data, ...this.countDownService.calculateCountDownTime(data)};
      this.countdownTimers = [];
      this.countdownTimers = Object.values(timerCategories);
    });
  }
}
