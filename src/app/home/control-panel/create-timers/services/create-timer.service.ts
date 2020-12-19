import {Injectable} from '@angular/core';

import {CustomTimer, Timer} from '../../../../shared/models/timer.model';
import {CrossComponentCommunicationService} from '../../../../services/cross-component-communication.service';

@Injectable({
  providedIn: 'root'
})

export class CreateTimerService {

  constructor(
    private crossComponentService: CrossComponentCommunicationService
  ) {
  }

  collectTimerData(data: Timer) {
    this.crossComponentService.timerData$.next(
      {
        hours: data.hours,
        minutes: data.minutes,
        timerType: data.timerType
      });
  };

  collectCustomTimerData(data: CustomTimer) {
    const customTimerData = {
      hours: data.hours,
      minutes: data.minutes,
      timerDescription: data.timerDescription
    };

    this.crossComponentService.customTimerData$.next(customTimerData);
  }

}


