import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import Routes from '../../../shared/routes/routes';


@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  @Input() displayMenu: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear();
    this.router.navigate([Routes.AUTHENTICATION]);
  }
}
