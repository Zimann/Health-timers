import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import Routes from "../shared/routes/routes";
import {AuthService} from "../services/auth.service";
import {LocalStorageService} from '../services/local-storage.service';
import {LocalStorageKeys} from '../shared/models/localStorageKeys';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  providers: [AuthService]
})
export class AuthenticationComponent implements OnInit {

  public initiateSlide: boolean;
  constructor(private router: Router,
              private localStorageService: LocalStorageService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // logic to keep the user logged in even when opening a separate tab based on the token expiry value
    // TODO include logic in a separate service
    const timeDif = Number(localStorage.getItem('departureMomentDate')) - Number(localStorage.getItem('requestMomentDate'));
    if (timeDif < Number(localStorage.getItem('tokenExpiry')) && localStorage.getItem('requestMomentDate')) {
      this.router.navigate([Routes.HOME]);
    }
  }

  moveForms(data: boolean) {
    this.initiateSlide = data;
  }

}
