import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

import {ReplaySubject, Subscription} from 'rxjs';

import Routes from '../shared/routes/routes';
import {LocalStorageService} from "../services/local-storage.service";
import {AudioService} from "../services/audio.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AudioService]
})
export class HomeComponent implements OnDestroy {

  showMenu = false;
  bringInSlide = false;

  outSideClickSubj: Subscription;
  private destroyed$ = new ReplaySubject(1);

  constructor(private router: Router,
              private localStorageService: LocalStorageService) {
  }

  logOut() {
    this.localStorageService.clearLocalStorage();
    this.router.navigate([Routes.AUTHENTICATION]);
  }

  ngOnDestroy(): void {
    // this is used for clearing the subscription inside the LocalStorageService
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

