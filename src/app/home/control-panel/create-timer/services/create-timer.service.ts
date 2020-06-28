import { Injectable } from '@angular/core';
import { Timer } from '../../../models/timer.model';


@Injectable()

export class CreateTimerService {

  collectCreatingData(data: Timer) {
    return data;
  };

}


