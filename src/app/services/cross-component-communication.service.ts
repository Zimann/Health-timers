import {Injectable} from '@angular/core';

import {BehaviorSubject, Subject} from 'rxjs';

import {Timer} from '../shared/models/timer.model';

@Injectable({
  providedIn: 'root'
})
export class CrossComponentCommunicationService {

  public resetSignUpForm$ = new Subject<boolean>();
  public resetLoginForm$ = new Subject<boolean>();
  public timerData$ = new Subject<Timer>();

  private alarmOn$ = new BehaviorSubject<boolean>(false);
  private alarmOnObs$ = this.alarmOn$.asObservable();

  setAlarmState(alarmState: boolean) {
    this.alarmOn$.next(alarmState);
    return this.alarmOnObs$;
  }

}
