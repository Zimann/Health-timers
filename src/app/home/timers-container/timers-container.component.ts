import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';

import {CountdownEvent} from "ngx-countdown";

import {
  AlarmTypes,
  CountDownTimer,
  TimerColumn,
  TimerIcons,
  TimerNames
} from "../../shared/models/timer.model";
import {CrossComponentCommunicationService} from '../../services/cross-component-communication.service';
import {CountdownService} from "../../services/countdown.service";
import {TimerColumnComponent} from "./timer-column/timer-column.component";
import {AudioService} from "../../services/audio.service";

@Component({
  selector: 'app-timers-container',
  templateUrl: './timers-container.component.html',
  styleUrls: ['./timers-container.component.scss'],
})

export class TimersContainerComponent implements OnInit {

  colNames: TimerColumn[] = [
    {timerName: TimerNames.STRETCHING, timerIcon: TimerIcons.RUNNING},
    {timerName: TimerNames.WORKOUT, timerIcon: TimerIcons.DUMBBELL},
    {timerName: TimerNames.CHILLING, timerIcon: TimerIcons.COUCH}
  ];

  countdownTimers: CountDownTimer[] = [];
  columnIndex: number;

  @Output()ringTheAlarm: EventEmitter<void> = new EventEmitter();
  @ViewChildren(TimerColumnComponent) timerColumnComponents: QueryList<TimerColumnComponent>;

  constructor(private crossComponentService: CrossComponentCommunicationService,
              private countDownService: CountdownService,
              private audioService: AudioService) {
  }

  handleCountdownStop(counterData: CountdownEvent) {
    if (counterData.left === 0) {
      this.crossComponentService.setAlarmState(true);
      this.audioService.playAudio(AlarmTypes.REGULAR);
    }
  }

  ngOnInit(): void {
    const timerCategories = {};
    this.colNames.forEach(el => timerCategories[el.timerName.toLowerCase()]);
    this.crossComponentService.timerData$.subscribe((data: CountDownTimer) => {
      timerCategories[data.timerType.toLowerCase()] = {...data, ...this.countDownService.calculateCountDownTime(data)};
      this.countdownTimers = Object.values(timerCategories);
    });
  }
}
