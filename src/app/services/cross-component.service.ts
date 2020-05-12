import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrossComponentService {

  public slideOutToggle$ = new Subject<boolean>();
  public resetSignUpForm$ = new Subject<boolean>();
  public resetLoginForm$ = new Subject<boolean>();

  public showMessageBar$ = new BehaviorSubject<boolean>(false);

  constructor() {
  }

}
