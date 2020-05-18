import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-timer',
  templateUrl: './create-timer.component.html',
  styleUrls: ['./create-timer.component.scss']
})
export class CreateTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createTimer() {
    console.log('create the timer');
  }
}
