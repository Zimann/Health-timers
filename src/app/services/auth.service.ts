import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import {Subject} from 'rxjs';

import {APIDetails} from '../shared/models/apiKeys.model';
import Routes from '../shared/routes/routes';
import {SignUpResponse, ResponsesMessages} from '../shared/models/responses.model';
import {LocalStorageService} from './local-storage.service';
import {LocalStorageKeys} from '../shared/models/localStorageKeys';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedUpSubj = new Subject();
  loggedInSubj = new Subject();
  signUpLoaderSubj = new Subject();
  logInLoaderSubj = new Subject();

  private static failedSignUpMessage = ResponsesMessages.FAILED_SIGNUP_MESSAGE;
  private static failedLogInMessage = ResponsesMessages.FAILED_LOGIN_MESSAGE;
  private static signUpEndpoint = `${APIDetails.signUpEndpoint}${APIDetails.firebaseAPIKey}`;
  private static logInEndpoint = `${APIDetails.logInEndpoint}${APIDetails.firebaseAPIKey}`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
  }

  signUpUser(email: string, password: string) {
    this.signUpLoaderSubj.next(false);
    this.http.post<SignUpResponse>(AuthService.signUpEndpoint, {
      email,
      password,
      returnSecureToken: true
    }).subscribe(
      () => {
        this.signedUpSubj.next(true);
        this.signUpLoaderSubj.next(true);
      },
      () => {
        this.signedUpSubj.next(AuthService.failedSignUpMessage);
        this.signUpLoaderSubj.next(true);
      });
  }

  logInUser(email: string, password: string) {
    this.logInLoaderSubj.next(false);
    this.http.post<SignUpResponse>(AuthService.logInEndpoint,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).subscribe(
      (data) => {
        this.localStorageService.clearLocalStorage();
        const requestMomentDate = Math.round(new Date().getTime() / 1000);
        this.localStorageService.setItem(LocalStorageKeys.REQUESTMOMENTDATE, String(requestMomentDate));
        this.localStorageService.setItem(LocalStorageKeys.TOKENEXPIRY, data.expiresIn);
        this.localStorageService.setItem(LocalStorageKeys.FIREBASEUID, data.localId);

        this.loggedInSubj.next(true);
        this.logInLoaderSubj.next(true);
        this.router.navigate([Routes.HOME]);
      },
      () => {
        this.loggedInSubj.next(AuthService.failedLogInMessage);
        this.logInLoaderSubj.next(true);
      });
  }
}
