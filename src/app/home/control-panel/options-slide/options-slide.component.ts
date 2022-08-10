import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CrossComponentCommunicationService} from '../../../services/cross-component-communication.service';

@Component({
  selector: 'app-options-slide',
  templateUrl: './options-slide.component.html',
  styleUrls: ['./options-slide.component.scss']
})
export class OptionsSlideComponent {

  @Input() slideIn: boolean;
  @Output() slideOutEmitter = new EventEmitter<boolean>();

  constructor(
    private crossComponentCommunicationService: CrossComponentCommunicationService
  ) { }


  startNotificationProcess(checkState: boolean) {
      this.crossComponentCommunicationService.turnSoundOff$.next(checkState);
  }

}
