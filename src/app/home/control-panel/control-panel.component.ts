import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {fromEvent, ReplaySubject, Subscription} from "rxjs";
import {take} from "rxjs/operators";

import {CrossComponentCommunicationService} from "../../services/cross-component-communication.service";
import {LocalStorageService} from "../../services/local-storage.service";
import {AudioService} from "../../services/audio.service";

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  providers: [AudioService]
})

export class ControlPanelComponent implements OnInit {

  showMenu = false;
  bringInSlide = false;
  hideBottomBar = this.crossComponentService.showMessageBar$;

  outSideClickSubj: Subscription;
  listenForOutsideClicks$ = fromEvent(document, 'click');

  // TODO refactor this whole communication process into a service, avoid all the emissions

  @Input() alarmActive: boolean;

  private destroyed$ = new ReplaySubject<boolean>(1);

  constructor(private router: Router,
              private crossComponentService: CrossComponentCommunicationService,
              private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.localStorageService.trackDepartureTime(this.destroyed$);
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
      this.outSideClickSubj = this.listenForOutsideClicks$
        .pipe(take(2))
        .subscribe(event => {
          currentTarget = event.target as Element;
          if (currentTarget.className !== 'fas fa-cogs') {
            event.preventDefault();
            this.showMenu = false;
          }
        });
    } else {
      if (this.outSideClickSubj) {
        this.outSideClickSubj.unsubscribe();
      }
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
