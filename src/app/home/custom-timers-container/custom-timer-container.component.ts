import {Component, OnInit} from '@angular/core';

import {CountdownEvent} from 'ngx-countdown';

import {AlarmTypes, CustomCountDownTimer} from '../../shared/models/timer.model';
import {CrossComponentCommunicationService} from '../../services/cross-component-communication.service';
import {CountdownService} from '../../services/countdown.service';
import {AudioService} from '../../services/audio.service';

@Component({
  selector: 'app-custom-timer-container',
  templateUrl: './custom-timer-container.component.html',
  styleUrls: ['./custom-timer-container.component.scss']
})
export class CustomTimerContainerComponent implements OnInit {

  customCountdownTimers: CustomCountDownTimer[] = [];

  constructor(private crossComponentService: CrossComponentCommunicationService,
              private countDownService: CountdownService,
              private audioService: AudioService) {
  }

  ngOnInit(): void {
    this.crossComponentService.customTimerData$.subscribe((data: CustomCountDownTimer) => {
      if (this.customCountdownTimers.length < 4) {
        this.customCountdownTimers.push({...data, ...this.countDownService.calculateCountDownTime(data)});
      } else {
        this.customCountdownTimers[3] = {...data, ...this.countDownService.calculateCountDownTime(data)};
      }
    });
  }

  handleCustomCountdownStop(counterData: CountdownEvent) {
    if (counterData.left === 0) {
      this.crossComponentService.setCustomAlarmState(true);
      this.audioService.playAudio(AlarmTypes.CUSTOM);
    }
  }

  deleteCustomTimer(timerIndex: number) {
    this.customCountdownTimers.splice(timerIndex,1);
  }

}
