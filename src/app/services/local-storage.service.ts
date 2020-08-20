import {Injectable} from '@angular/core';
import {ReplaySubject, timer} from "rxjs";
import {takeUntil} from "rxjs/operators";
import Routes from "../shared/routes/routes";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private router: Router) {
  }


  trackDepartureTime(destroyed$: ReplaySubject<boolean>) {

    let departureMomentDate;

    // add local storage timeStamp when navigating away
    window.addEventListener('beforeunload', (e) => {
      departureMomentDate = Math.round(new Date().getTime() / 1000);
      localStorage.setItem('departureMomentDate', String(departureMomentDate));
    });
    // route user back to the authentication page once the token expires
    const tokenExpiryTime = Number(localStorage.getItem('tokenExpiry')) * 1000;
    const tokenExpiry$ = timer(tokenExpiryTime);
    tokenExpiry$
      .pipe(takeUntil(destroyed$))
      .subscribe(() => {
        localStorage.clear();
        this.router.navigate([Routes.AUTHENTICATION]);
      });

  }
}
