import {Injectable} from '@angular/core';

import {BehaviorSubject, Subject} from 'rxjs';

import {Timer, CustomTimer} from '../shared/models/timer.model';

@Injectable({
  providedIn: 'root'
})
export class CrossComponentCommunicationService {

  totalCustomTimers$ = new Subject<number>();
  turnSoundOff$ = new BehaviorSubject<boolean>(false);
  resetSignUpForm$ = new Subject<boolean>();
  resetLoginForm$ = new Subject<boolean>();
  timerData$ = new Subject<Timer>();
  customTimerData$ = new Subject<CustomTimer>();

  private alarmOn$ = new BehaviorSubject<boolean>(false);
  private alarmOnObs$ = this.alarmOn$.asObservable();

  private customAlarmOn$ = new BehaviorSubject<boolean>(false);
  private customAlarmOnObs$ = this.customAlarmOn$.asObservable();

  public customTimerAdded$ = new Subject<boolean>();

  setAlarmState(alarmState: boolean) {
    this.alarmOn$.next(alarmState);
    return this.alarmOnObs$;
  }

  setCustomAlarmState(alarmState: boolean) {
    this.customAlarmOn$.next(alarmState);
    return this.customAlarmOnObs$;
  }

}
