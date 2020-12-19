import firebase from 'firebase';
import {Injectable} from '@angular/core';
import {CustomTimer} from '../shared/models/timer.model';
import {LocalStorageKeys} from '../shared/models/localStorageKeys';
import {LocalStorageService} from './local-storage.service';
import {v4 as uuidv4} from 'uuid'

@Injectable({providedIn: 'root'})

// to be used if data persistence is needed
// ----------------------------------------------
export class DbService {

  // this is the only database reference that needs to exist inside the app
  firebaseDb = firebase.database();
  firebaseAuth = firebase.auth();
  private userUid = this.localStorageService.getItem(LocalStorageKeys.FIREBASEUID);

  constructor(
    private localStorageService: LocalStorageService
  ) {
  }

  storeCustomTimerData(customTimer: CustomTimer) {
    this.storeCustomTimer(customTimer);
  }

  storeCustomTimer(customTimer: CustomTimer) {
    const uniqueId = uuidv4();
    this.firebaseDb.ref(`users/${this.userUid}/customTimers/${String(uniqueId)}`).set(customTimer);
  }

}
