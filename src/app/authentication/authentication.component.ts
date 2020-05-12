import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import Routes from "../shared/routes/routes";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  providers: [AuthService]
})
export class AuthenticationComponent implements OnInit {

  public initiateSlide: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // logic to keep the user logged in even when opening a separate tab based on the token expiry value
    const timeDif = Number(localStorage.getItem('departureMomentDate')) - Number(localStorage.getItem('requestMomentDate'));
    if (timeDif < Number(localStorage.getItem('tokenExpiry')) && localStorage.getItem('requestMomentDate')) {
      this.router.navigate([Routes.HOME]);
    }
  }

  moveForms(data: boolean) {
    this.initiateSlide = data;
  }

}
