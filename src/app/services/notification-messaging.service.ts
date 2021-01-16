import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {take} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {NotificationBody, PriorityType} from '../shared/models/notifications.model';
import {FireBaseAPIDetails} from '../shared/models/apiKeys';

@Injectable()
export class NotificationMessagingService {

  public token: string;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private afMessaging: AngularFireMessaging,
    private http: HttpClient,
  ) {
  }

  getPermission() {
    this.afMessaging.requestPermission.pipe(take(1)).toPromise()
      .then(() => {
        return this.afMessaging.getToken.toPromise();
      }).then(token => {
      this.token = token;
    }).catch(err => {
      throw new Error(`Unable to get permission to notify: ${err}`);
    });
  }

  pushNotification(timerDescription: string) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `key=${FireBaseAPIDetails.serverKey}`
    }

    const bodyReq: NotificationBody = {
      to: this.token,
      notification: {
        title: timerDescription
      },
      priority: PriorityType.HIGH
    };
    this.http.post(FireBaseAPIDetails.notificationEndpoint, bodyReq, {headers}).pipe(take(1)).subscribe();
  }
}
