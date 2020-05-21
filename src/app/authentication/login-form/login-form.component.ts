import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ReplaySubject, Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {CrossComponentService} from '../../services/cross-component.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy, AfterViewInit {

  // this will have 'false' value when the form switches
  @Input() formMoveInitiated: boolean;
  @ViewChild('forgottenPassRef') forgottenPassRef: ElementRef;
  @ViewChild('loginEmailRef') loginEmailRef: ElementRef;

  private destroyed$ = new ReplaySubject(1);

  public bringInForgottenPass = false;
  public forgottenSubmitted = false;
  public isUserSignedIn = this.authService.loggedInSubj;
  public loaderSub = this.authService.logInLoaderSubj;
  public loginForm: FormGroup;
  public forgottenPassForm: FormGroup;
  public signInSub: Subscription;

  constructor(private formBuild: FormBuilder,
              private authService: AuthService,
              private crossComponentService: CrossComponentService) { }

  ngOnInit(): void {

    this.signInSub = this.crossComponentService.resetLoginForm$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(data => {
        if (data) {
          this.loginForm.reset();
        }
      });

    this.forgottenPassForm = this.formBuild.group({
      forgottenPassEmail: ['', [
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ]]
    });

    // Login Form validation
    this.loginForm = this.formBuild.group({
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
    // this is where we get data from the login form
    this.loginForm.valueChanges
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        if (this.bringInForgottenPass) {
          this.bringInForgottenPass = false;
          this.forgottenPassForm.reset();
        }
      });
  }

  get loginEmail() {
    return this.loginForm.get('email');
  }

  get loginPassword() {
    return this.loginForm.get('password');
  }

  get forgottenPassEmail() {
    return this.forgottenPassForm.get('forgottenPassEmail');
  }

  onSubmitLogin() {
    this.authService.logInUser(this.loginEmail.value, this.loginPassword.value);
    this.loginForm.reset();
  }

  bringInForgottenPassword() {
    this.forgottenPassForm.reset();
    this.bringInForgottenPass = !this.bringInForgottenPass;
    this.forgottenPassRef.nativeElement.focus();
  }

  onSubmitForgottenPass() {

    this.loginEmailRef.nativeElement.focus();
    // show confirmation message
    this.forgottenSubmitted = true;
    setTimeout(() => {
      this.forgottenSubmitted = false;
      this.bringInForgottenPass = false;
      this.forgottenPassForm.reset();
    }, 1200);

    // send the new password to the provided email address
  }

  ngAfterViewInit(): void {
    this.loginForm.reset();
    this.loginForm.markAsPristine();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
