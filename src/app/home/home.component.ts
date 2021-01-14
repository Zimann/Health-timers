import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {BehaviorSubject, ReplaySubject, Subscription} from 'rxjs';

import Routes from '../shared/routes/routes';
import {LocalStorageService} from "../services/local-storage.service";
import {AudioService} from "../services/audio.service";
import {NotificationMessagingService} from '../services/notification-messaging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AudioService]
})
export class HomeComponent implements OnInit, OnDestroy {

  showMenu = false;
  bringInSlide = false;
  message: BehaviorSubject<string>;

  outSideClickSubj: Subscription;
  private destroyed$ = new ReplaySubject(1);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private notificationMessagingService: NotificationMessagingService
  ) {
  }

  ngOnInit() {
    this.notificationMessagingService.getPermission();
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

