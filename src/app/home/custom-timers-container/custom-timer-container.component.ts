import {Component, OnInit} from '@angular/core';

import {CountdownEvent} from 'ngx-countdown';

import {AlarmTypes, CustomCountDownTimer} from '../../shared/models/timer.model';
import {CrossComponentCommunicationService} from '../../services/cross-component-communication.service';
import {CountdownService} from '../../services/countdown.service';
import {AudioService} from '../../services/audio.service';
import {NotificationMessagingService} from '../../services/notification-messaging.service';

@Component({
  selector: 'app-custom-timer-container',
  templateUrl: './custom-timer-container.component.html',
  styleUrls: ['./custom-timer-container.component.scss']
})
export class CustomTimerContainerComponent implements OnInit {

  customCountdownTimers: CustomCountDownTimer[] = [];

  constructor(private crossComponentCommunicationService: CrossComponentCommunicationService,
              private countDownService: CountdownService,
              private audioService: AudioService,
              private notificationMessagingService: NotificationMessagingService
  ) {
  }

  ngOnInit(): void {
    this.crossComponentCommunicationService.customTimerData$.subscribe((data: CustomCountDownTimer) => {
      if (this.customCountdownTimers.length < 8) {
        this.customCountdownTimers.push({...data, ...this.countDownService.calculateCountDownTime(data)});
        this.crossComponentCommunicationService.totalCustomTimers$.next(this.customCountdownTimers.length);
      }
      console.log(this.customCountdownTimers);
    });
  }

  handleCustomCountdownStop(counterData: CountdownEvent, timerDescription: string) {
    if (counterData.left === 0) {
      this.crossComponentCommunicationService.setCustomAlarmState(true);

      if (!this.crossComponentCommunicationService.turnSoundOff$.value) {
        this.audioService.playAudio(AlarmTypes.CUSTOM);
      }

      this.notificationMessagingService.pushNotification(timerDescription);
    }
  }

  deleteCustomTimer(timerIndex: number) {
    this.customCountdownTimers.splice(timerIndex, 1);
    this.crossComponentCommunicationService.totalCustomTimers$.next(this.customCountdownTimers.length);
  }
}
