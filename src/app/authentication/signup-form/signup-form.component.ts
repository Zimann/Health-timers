import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {CrossComponentService} from "../../services/cross-component.service";
import {ReplaySubject, Subscription} from "rxjs";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  private destroyed$ = new ReplaySubject(1);
  public isUserSignedUp = this.authService.signedUpSubj;
  public signUpSub: Subscription;
  public loaderSub = this.authService.signUpLoaderSubj;
  @Input() formMoveInitiated: boolean;
  // public signUpForm: FormGroup;
  public signUpChecker = {
    email: true,
    password: true,
  };

  constructor(private authService: AuthService,
              private crossComponentService: CrossComponentService) { }

  ngOnInit(): void {
  }

  // get signUpEmail() {
  //   return this.signUpForm.get('email');
  // }
  //
  // get signUpPassword() {
  //   return this.signUpForm.get('password');
  // }

}
