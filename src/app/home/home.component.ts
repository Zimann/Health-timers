import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {fromEvent, ReplaySubject, Subscription, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import Routes from '../shared/routes/routes';
import {CrossComponentCommunicationService} from '../services/cross-component-communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  showMenu = false;
  bringInSlide = false;
  hideBottomBar = this.crossComponentService.showMessageBar$;
  showStopAlarm = false;

  outSideClickSubj: Subscription;
  private destroyed$ = new ReplaySubject(1);

  constructor(private router: Router,
              private crossComponentService: CrossComponentCommunicationService) {
  }

  ngOnInit() {
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
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        localStorage.clear();
        this.router.navigate([Routes.AUTHENTICATION]);
      });
  }

  alarmActive() {
    this.showStopAlarm = true;
    // this.audioService.playAudio();
    // console.log(this.showStopAlarm);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate([Routes.AUTHENTICATION]);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

