import {Component, OnInit} from '@angular/core';
import {CountDownTimer, TimerTitle} from "../../shared/models/timer.model";
import {CrossComponentService} from '../../services/cross-component.service';
import {CountdownService} from "../../services/countdown.service";
import {CountdownEvent} from "ngx-countdown";
import {AudioService} from "../../services/audio.service";

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

  ringTheAlarm: boolean;

  countdownTimers: CountDownTimer[] = [];

  constructor(private crossComponentService: CrossComponentService,
              private countDownService: CountdownService,
              private audioService: AudioService) {
  }

  handleCountdownStop(counterData: CountdownEvent) {
    if (counterData.left === 0) {
      this.ringTheAlarm = true;
      this.audioService.playAudio();

    }
  }

  ngOnInit(): void {
    const timerCategories = {};
    this.colNames.forEach(el => timerCategories[el.timerName.toLowerCase()]);
    this.crossComponentService.timerData$.subscribe((data: CountDownTimer) => {
      timerCategories[data.timerType.toLowerCase()] = {...data, ...this.countDownService.calculateCountDownTime(data)};
      this.countdownTimers = [];
      this.countdownTimers = Object.values(timerCategories);
    });
  }
}
