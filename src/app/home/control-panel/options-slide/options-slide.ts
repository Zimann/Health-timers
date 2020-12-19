import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessagingService} from '../../../services/messaging.service';

@Component({
  selector: 'app-options-slide',
  templateUrl: './options-slide.component.html',
  styleUrls: ['./options-slide.component.scss']
})
export class OptionsSlideComponent {

  @Input() slideIn: boolean;
  @Output() slideOutEmitter = new EventEmitter<boolean>();

  message;
  constructor(private messagingService: MessagingService) { }


  startNotificationProcess(checkState : boolean) {
    if (checkState) {
      this.messagingService.getPermission();
      this.messagingService.receiveMessage();
      this.message = this.messagingService.currentMessage;
    } else {

      // deactivate notifications
    }
  }

}
