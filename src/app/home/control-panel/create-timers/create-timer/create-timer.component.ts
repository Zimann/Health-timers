import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateTimerService } from '../services/create-timer.service';

@Component({
  selector: 'app-create-timer',
  templateUrl: './create-timer.component.html',
  styleUrls: ['./create-timer.component.scss']
})
export class CreateTimerComponent implements OnInit {

  timerForm: FormGroup;

  @ViewChild('minutesTpl') minutesTpl : ElementRef;
  @ViewChild('hoursTpl') hoursTpl : ElementRef;

  constructor(private formBuild: FormBuilder,
              private createTimerService: CreateTimerService) {
  }

  ngOnInit(): void {
    this.timerForm = this.formBuild.group({
      hours: [''],
      minutes: [''],
      timerType: ['']
    });

    this.hoursInput.valueChanges.subscribe(val =>  {
      if (val !== null) {
        this.minutesTpl.nativeElement.removeAttribute('required');
      } else {
        this.minutesTpl.nativeElement.setAttribute('required', 'true');
      }
    });

    this.minutesInput.valueChanges.subscribe(val => {
      if (val !== null) {
        this.hoursTpl.nativeElement.removeAttribute('required');
      } else {
        this.hoursTpl.nativeElement.setAttribute('required', 'true');
      }
    });
  }

  get hoursInputValue() {
    return this.timerForm.get('hours').value;
  }

  get minutesInputValue() {
    return this.timerForm.get('minutes').value;
  }

  get timerType() {
    return this.timerForm.get('timerType').value;
  }

  get hoursInput() {
    return this.timerForm.get('hours');
  }

  get minutesInput(){
    return this.timerForm.get('minutes');
  }

  composeTimerValues() {
    this.createTimerService.collectCreatingData({
      hours: this.hoursInputValue,
      minutes: this.minutesInputValue,
      timerType: this.timerType
    });
    this.timerForm.reset();
  }

}
