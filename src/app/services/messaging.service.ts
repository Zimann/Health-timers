import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {BehaviorSubject} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {take} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MessagingService {
  currentMessage = new BehaviorSubject(null);

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private afMessaging: AngularFireMessaging,
  ) {
  }

  getPermission() {
    this.afMessaging.requestPermission.toPromise()
      .then(() => {
        console.log('Notification permission granted');
        return this.afMessaging.getToken.toPromise();
      }).then(token => {
      console.log(token);
      this.updateToken(token);

    }).catch(err => {
      throw new Error(`Unable to get permission to notify: ${err}`);
    });
  }

  private updateToken(token) {
    this.afAuth.authState.pipe(take(1)).subscribe(user => {
      if (!user) {
        return;
      }

      // this is where we can get the logged in user's uid
      const data = {[user.uid]: token};
    });
  }

  receiveMessage() {
    this.afMessaging.onMessage(payload => {
      console.log('Message received. ', payload);
      this.currentMessage.next(payload);
    });
  }
}
