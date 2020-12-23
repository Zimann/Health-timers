import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {CreateTimerService} from "../services/create-timer.service";
import {CrossComponentCommunicationService} from '../../../../services/cross-component-communication.service';

@Component({
  selector: 'app-create-custom-timer',
  templateUrl: './create-custom-timer.component.html',
  styleUrls: ['./create-custom-timer.component.scss']
})
export class CreateCustomTimerComponent implements OnInit {

  customTimerForm: FormGroup;
  totalCustomTimers$ = this.crossComponentCommunicationService.totalCustomTimers$;
  customTimerLimit = 8;

  @ViewChild('customMinutesTpl') customMinutesTpl : ElementRef;
  @ViewChild('customHoursTpl') customHoursTpl : ElementRef;

  constructor(private formBuild: FormBuilder,
              private createTimerService: CreateTimerService,
              private crossComponentCommunicationService: CrossComponentCommunicationService
  ) { }

  ngOnInit() {
    this.customTimerForm = this.formBuild.group({
      customHours: [''],
      customMinutes: [''],
      customDescription: ['']
    });

    this.customHoursInput.valueChanges.subscribe(val =>  {
      if (val !== null) {
        this.customMinutesTpl.nativeElement.removeAttribute('required');
      } else {
        this.customMinutesTpl.nativeElement.setAttribute('required', 'true');
      }
    });

    this.customMinutesInput.valueChanges.subscribe(val => {
      if (val !== null) {
        this.customHoursTpl.nativeElement.removeAttribute('required');
      } else {
        this.customHoursTpl.nativeElement.setAttribute('required', 'true');
      }
    });

  }

  get customHoursInputValue() {
    return this.customTimerForm.get('customHours').value;
  }

  get customMinutesInputValue() {
    return this.customTimerForm.get('customMinutes').value;
  }

  get customMinutesInput() {
    return this.customTimerForm.get('customMinutes');
  }

  get customHoursInput() {
    return this.customTimerForm.get('customHours');
  }

  get timerDescription() {
    return this.customTimerForm.get('customDescription').value;
  }

  createCustomTimer(): void {
    this.createTimerService.collectCustomTimerData({
      hours: this.customHoursInputValue,
      minutes: this.customMinutesInputValue,
      timerDescription: this.timerDescription
    })
    this.customTimerForm.reset();
  }

}
