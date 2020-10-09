import {Injectable} from '@angular/core';

import {Countdown, HourConversionUnits} from "../shared/models/timer.model";

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  public calculateCountDownTime(data): Countdown {
    return {
      leftTime: data.hours * HourConversionUnits.HOUR_TO_SECONDS + data.minutes * HourConversionUnits.MINUTE_TO_SECONDS,
      format: data.hours > 0 ? 'h:m:s' : 'm:s'
    }
  }

}
