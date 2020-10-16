import {Injectable} from '@angular/core';

import {Countdown, CountDownTimer, HourConversionUnits} from "../shared/models/timer.model";

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  private static calculateRemainingTime(timer: CountDownTimer): number {
    return timer.hours * HourConversionUnits.HOUR_TO_SECONDS + timer.minutes * HourConversionUnits.MINUTE_TO_SECONDS;
  }

  public calculateCountDownTime(data: CountDownTimer): Countdown {
    return {
      leftTime: CountdownService.calculateRemainingTime(data)
    }
  }

}
