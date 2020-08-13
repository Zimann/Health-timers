import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { CreateTimerService } from './services/create-timer.service';

@Component({
  selector: 'app-create-timer',
  templateUrl: './create-timer.component.html',
  styleUrls: ['./create-timer.component.scss']
})
export class CreateTimerComponent implements OnInit {

  timerForm: FormGroup;

  private timerSubj = new Subject();
  timerSubj$ = this.timerSubj.asObservable();

  constructor(private formBuild: FormBuilder,
              private createTimerService: CreateTimerService) {
  }

  ngOnInit(): void {
    this.timerForm = this.formBuild.group({
      hours: [''],
      minutes: [''],
      timerType: ['']
    });
  }

  get hoursValue() {
    return this.timerForm.get('hours').value;
  }

  get minutesValue() {
    return this.timerForm.get('minutes').value;
  }

  get timerType() {
    return this.timerForm.get('timerType').value;
  }

  composeTimerValues() {

    this.createTimerService.collectCreatingData({
      hours: this.hoursValue,
      minutes: this.minutesValue,
      timerType: this.timerType
    })
  }
}
