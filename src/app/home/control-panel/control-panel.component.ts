import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {fromEvent, Observable, ReplaySubject, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';

import {CrossComponentCommunicationService} from '../../services/cross-component-communication.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {AudioService} from '../../services/audio.service';
import {AlarmTypes} from '../../shared/models/timer.model';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})

export class ControlPanelComponent implements OnInit {

  showMenu = false;
  bringInSlide = false;
  alarmState$: Observable<boolean>;
  customAlarmState$: Observable<boolean>;
  alarmTypes = AlarmTypes;

  outSideClickSubj = new Subscription();
  listenForOutsideClicks$ = fromEvent(document, 'click');

  private destroyed$ = new ReplaySubject<boolean>(1);

  constructor(private router: Router,
              private crossComponentService: CrossComponentCommunicationService,
              private localStorageService: LocalStorageService,
              private audioService: AudioService) { }

  ngOnInit() {
    this.localStorageService.trackDepartureTime(this.destroyed$);
    this.alarmState$ = this.crossComponentService.setAlarmState(false);
    this.customAlarmState$ = this.crossComponentService.setCustomAlarmState(false);
  }

  showProfileSection(data: boolean) {
    this.bringInSlide = data;
  }

  setSlidingState(): boolean {
    return this.bringInSlide;
  }

  showSettingsMenu() {
    this.showMenu = !this.showMenu;
    if (this.showMenu === true) {
      let currentTarget: Element;
      // listen for clicks outside the settings menu
      this.outSideClickSubj.add(this.listenForOutsideClicks$
        .pipe(take(2))
        .subscribe(event => {
          currentTarget = event.target as Element;
          if (currentTarget.className !== 'fas fa-cogs') {
            event.preventDefault();
            this.showMenu = false;
          }
        })
      );
    }
  }

  hideAlarmButton(alarmType) {
    if (alarmType === AlarmTypes.REGULAR) {
      this.alarmState$ = this.crossComponentService.setAlarmState(false);
    } else if (alarmType === AlarmTypes.CUSTOM) {
      this.customAlarmState$ = this.crossComponentService.setCustomAlarmState(false);
    }
      this.audioService.stopAudio();
  };

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.outSideClickSubj.unsubscribe();
  }

}
