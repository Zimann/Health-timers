import { Component, OnInit } from '@angular/core';
import { Countdown, CountDownTimer, HourConversionUnits, TimerTitle } from "../../shared/models/timer.model";
import { CrossComponentService } from '../../services/cross-component.service';
import {CountdownService} from "../../services/countdown.service";

@Component({
  selector: 'app-timers-container',
  templateUrl: './timers-container.component.html',
  styleUrls: ['./timers-container.component.scss']
})

export class TimersContainerComponent implements OnInit {

  colNames: TimerTitle[] = [
    {timerName: 'Stretching', timerIcon: 'fa-running'},
    {timerName: 'Fast workout', timerIcon: 'fa-dumbbell'},
    {timerName: 'Chilling', timerIcon: 'fa-couch'}
  ];

  // TODO refactor this to fetch the timers from firebase
  // this will stay like this for now

  countdownTimers: CountDownTimer[] = [];
  timerName: string;

  constructor(private crossComponentService: CrossComponentService,
              private countDownService: CountdownService) {
  }

  ngOnInit(): void {
    this.crossComponentService.timerData$.subscribe(data => {
      this.timerName = data.timerType;
      this.countdownTimers.push({...data, ...this.countDownService.calculateCountDownTime(data)});
    });
  }

}
