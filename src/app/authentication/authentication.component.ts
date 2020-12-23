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

  constructor(private authService: AuthService,) { }

  ngOnInit(): void {
    this.authService.calculateRemainingLoginTime();
  }

  moveForms(data: boolean) {
    this.initiateSlide = data;
  }

}
