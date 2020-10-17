import { Injectable } from '@angular/core';
import { Timer } from '../../../../shared/models/timer.model';
import { CrossComponentCommunicationService } from '../../../../services/cross-component-communication.service';


@Injectable({
  providedIn: 'root'
})

export class CreateTimerService {

  constructor(private crossComponentService: CrossComponentCommunicationService) {
  }

  collectCreatingData(data: Timer) {
    this.crossComponentService.timerData$.next(
      {
        hours: data.hours,
        minutes: data.minutes,
        timerType: data.timerType
      });
  };

}


