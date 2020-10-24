import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {CreateTimerService} from "../services/create-timer.service";

@Component({
  selector: 'app-create-custom-timer',
  templateUrl: './create-custom-timer.component.html',
  styleUrls: ['./create-custom-timer.component.scss']
})
export class CreateCustomTimerComponent implements OnInit {

  customTimerForm: FormGroup;

  constructor(private formBuild: FormBuilder,
              private createTimerService: CreateTimerService ) { }



  ngOnInit(): void {
    this.customTimerForm = this.formBuild.group({
      customHours: [''],
      customMinutes: [''],
      customDescription: ['']
    });
  }

  get customHoursInputValue() {
    return this.customTimerForm.get('customHours').value;
  }

  get customMinutesInputValue() {
    return this.customTimerForm.get('customMinutes').value;
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
