import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {CrossComponentService} from "../../services/cross-component.service";
import {ReplaySubject, Subscription} from "rxjs";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit, OnDestroy {

  private destroyed$ = new ReplaySubject(1);
  public isUserSignedUp = this.authService.signedUpSubj;
  public signUpSub: Subscription;
  public loaderSub = this.authService.signUpLoaderSubj;
  @Input() formMoveInitiated: boolean;
  public signUpForm: FormGroup;
  public signUpChecker = {
    email: true,
    password: true,
  };

  constructor(private formBuild: FormBuilder,
              private authService: AuthService,
              private crossComponentService: CrossComponentService) { }

  ngOnInit(): void {
    this.signUpSub = this.crossComponentService.resetSignUpForm$.subscribe(data => {
      if (data) {
        this.signUpForm.reset();
      }
    });

    this.signUpForm = this.formBuild.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(9)
      ]]
    });
  }

  get signUpEmail() {
    return this.signUpForm.get('email');
  }

  get signUpPassword() {
    return this.signUpForm.get('password');
  }

  onSubmitSignUp() {
    // check the password, email and name fields
    if ((this.signUpForm.value.email === '' && this.signUpForm.value.password === '' && this.signUpForm.value.name === '') ||
      this.signUpForm.controls.email.status === 'INVALID' &&
      this.signUpForm.controls.password.status === 'INVALID' &&
      this.signUpForm.controls.name.status === 'INVALID'
    ) {
      this.signUpChecker.email = false;
      this.signUpChecker.password = false;
      return;
    }
    if (this.signUpForm.value.email === '' || this.signUpForm.controls.email.status === 'INVALID') {
      this.signUpChecker.email = false;
      return;
    }

    if (this.signUpForm.value.password === '' || this.signUpForm.controls.password.status === 'INVALID') {
      this.signUpChecker.password = false;
      return;
    }

    this.authService.signUpUser(this.signUpEmail.value, this.signUpPassword.value);
    this.signUpForm.reset();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.signUpSub.unsubscribe();
  }


}
