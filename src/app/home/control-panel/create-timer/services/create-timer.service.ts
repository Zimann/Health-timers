import { Injectable } from '@angular/core';
import { Timer } from '../../../../shared/models/timer.model';
import { CrossComponentService } from '../../../../services/cross-component.service';


@Injectable({
  providedIn: 'root'
})

export class CreateTimerService {

  constructor(private crossComponentService: CrossComponentService) {
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


