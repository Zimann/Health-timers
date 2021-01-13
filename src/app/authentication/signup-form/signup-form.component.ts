import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {CrossComponentCommunicationService} from '../../services/cross-component-communication.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit, OnDestroy {

  // this will have 'true' value when the form switches
  @Input() formMoveInitiated: boolean;

  public isUserSignedUp = this.authService.signedUpSubj;
  public loaderSub = this.authService.signUpLoaderSubj;
  public signUpForm: FormGroup;

  private destroyed$ = new Subject();

  @ViewChild('signupEmailRef') signupEmailRef: ElementRef;

  constructor(private formBuild: FormBuilder,
              private authService: AuthService,
              private crossComponentService: CrossComponentCommunicationService) {
  }

  ngOnInit(): void {
    this.crossComponentService.resetSignUpForm$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe(data => {
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
    this.authService.signUpUser(this.signUpEmail.value, this.signUpPassword.value);
    this.signupEmailRef.nativeElement.focus();
    this.signupEmailRef.nativeElement.blur();
    this.signUpForm.reset();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
