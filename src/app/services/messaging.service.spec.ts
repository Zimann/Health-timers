import { TestBed } from '@angular/core/testing';

import { NotificationMessagingService } from './notification-messaging.service';

describe('MessagingService', () => {
  let service: NotificationMessagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationMessagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
