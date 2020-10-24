import {Component, OnInit} from '@angular/core';
import {CustomCountDownTimer} from "../../shared/models/timer.model";
import {CrossComponentCommunicationService} from "../../services/cross-component-communication.service";
import {CountdownService} from "../../services/countdown.service";
import {AudioService} from "../../services/audio.service";
import {CountdownEvent} from "ngx-countdown";

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
      this.customCountdownTimers.push({...data, ...this.countDownService.calculateCountDownTime(data)});
    });
  }


  handleCustomCountdownStop(counterData: CountdownEvent) {
    if (counterData.left === 0) {
      this.crossComponentService.setCustomAlarmState(true);
      this.audioService.playAudio();
    }
  }

}
