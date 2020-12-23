import {Injectable} from '@angular/core';

import {BehaviorSubject, Subject} from 'rxjs';

import {Timer, CustomTimer} from '../shared/models/timer.model';

@Injectable({
  providedIn: 'root'
})
export class CrossComponentCommunicationService {

  public totalCustomTimers$ = new Subject<number>();
  public turnSoundOff$ = new BehaviorSubject<boolean>(false);
  public resetSignUpForm$ = new Subject<boolean>();
  public resetLoginForm$ = new Subject<boolean>();
  public timerData$ = new Subject<Timer>();
  public customTimerData$ = new Subject<CustomTimer>();

  private alarmOn$ = new BehaviorSubject<boolean>(false);
  private alarmOnObs$ = this.alarmOn$.asObservable();

  private customAlarmOn$ = new BehaviorSubject<boolean>(false);
  private customAlarmOnObs$ = this.customAlarmOn$.asObservable();

  setAlarmState(alarmState: boolean) {
    this.alarmOn$.next(alarmState);
    return this.alarmOnObs$;
  }

  setCustomAlarmState(alarmState: boolean) {
    this.customAlarmOn$.next(alarmState);
    return this.customAlarmOnObs$;
  }

}
