import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-custom-timer',
  templateUrl: './create-custom-timer.component.html',
  styleUrls: ['./create-custom-timer.component.scss']
})
export class CreateCustomTimerComponent implements OnInit {

  customTimerForm: FormGroup;

  constructor(private formBuild: FormBuilder,) { }



  ngOnInit(): void {
    this.customTimerForm = this.formBuild.group({
      hours: [''],
      minutes: [''],
      timerType: ['']
    });
  }

}
