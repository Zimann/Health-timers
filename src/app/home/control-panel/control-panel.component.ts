import { Component, OnInit } from '@angular/core';
import {fromEvent, ReplaySubject, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {CrossComponentService} from "../../services/cross-component.service";
import {take} from "rxjs/operators";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  showMenu = false;
  bringInSlide = false;
  hideBottomBar = this.crossComponentService.showMessageBar$;

  outSideClickSubj: Subscription;
  listenForOutsideClicks$ = fromEvent(document, 'click');
  private destroyed$ = new ReplaySubject<boolean>(1);

  constructor(private router: Router,
              private crossComponentService: CrossComponentService,
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
