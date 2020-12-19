import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

import {ReplaySubject, timer} from "rxjs";
import {takeUntil} from "rxjs/operators";

import Routes from "../shared/routes/routes";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private departureMomentDate: number;

  constructor(private router: Router) { }


  trackDepartureTime(destroyed$: ReplaySubject<boolean>) {
    // add local storage timeStamp when navigating away
    window.addEventListener('beforeunload', (e) => {
      this.departureMomentDate = Math.round(new Date().getTime() / 1000);
      localStorage.setItem('departureMomentDate', String(this.departureMomentDate));
    });
    // route user back to the authentication page once the token expires
    let tokenExpiryTime = Number(localStorage.getItem('tokenExpiry')) * 1000;
    const tokenExpiry$ = timer(tokenExpiryTime);
    tokenExpiry$
      .pipe(takeUntil(destroyed$))
      .subscribe(() => {
        this.clearLocalStorage();
        this.router.navigate([Routes.AUTHENTICATION]);
      });
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }
}
