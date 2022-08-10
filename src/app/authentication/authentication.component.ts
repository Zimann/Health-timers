import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  providers: [AuthService]
})
export class AuthenticationComponent {

  public initiateSlide: boolean;

  moveForms(data: boolean) {
    this.initiateSlide = data;
  }
}
