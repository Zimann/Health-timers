import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Timer } from '../shared/models/timer.model';

@Injectable({
  providedIn: 'root'
})
export class CrossComponentService {

  public slideOutToggle$ = new Subject<boolean>();
  public resetSignUpForm$ = new Subject<boolean>();
  public resetLoginForm$ = new Subject<boolean>();

  public showMessageBar$ = new BehaviorSubject<boolean>(false);
  public timerData$ = new Subject<Timer>();

  constructor() {
  }

}
