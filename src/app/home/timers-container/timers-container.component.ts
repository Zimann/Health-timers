import { Component, OnInit } from '@angular/core';
import { Countdown, CountDownTimer, HourConversionUnits, TimerTitle } from "../../shared/models/timer.model";
import { CrossComponentService } from '../../services/cross-component.service';

@Component({
  selector: 'app-timers-container',
  templateUrl: './timers-container.component.html',
  styleUrls: ['./timers-container.component.scss']
})

export class TimersContainerComponent implements OnInit {

  colNames: TimerTitle[] = [
    {timerName: 'Stretching timers', timerIcon: 'fa-running'},
    {timerName: 'Fast workout timers', timerIcon: 'fa-dumbbell'},
    {timerName: 'Chilling timers', timerIcon: 'fa-couch'}
  ];

  // TODO refactor this to fetch the timers from firebase
  // this will stay like this for now

  countdownTimers: CountDownTimer[] = [];
  timerName: string;

  constructor(private crossComponentService: CrossComponentService) {
  }

  ngOnInit(): void {
    this.crossComponentService.timerData$.subscribe(data => {
      // TODO Move this to a separate service (countdown service??)
      this.timerName = data.timerType;
      this.countdownTimers.push({...data, ...TimersContainerComponent.calculateCountDownTime(data)});
    });
  }

  private static calculateCountDownTime(data): Countdown {
    return {
      leftTime: data.hours * HourConversionUnits.HOUR_TO_SECONDS + data.minutes * HourConversionUnits.MINUTE_TO_SECONDS,
      format: 'h:m:s'
    }
  }

}
