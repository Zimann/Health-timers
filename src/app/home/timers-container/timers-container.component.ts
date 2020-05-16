import { Component, OnInit } from '@angular/core';
import {TimerTitle} from "../../shared/models/timer-model";

@Component({
  selector: 'app-timers-container',
  templateUrl: './timers-container.component.html',
  styleUrls: ['./timers-container.component.scss']
})
export class TimersContainerComponent implements OnInit {
  colNames:TimerTitle[] = [
    {timerName: 'Stretching timers', timerIcon: 'fa-running'},
    {timerName:'Fast workout timers', timerIcon: 'fa-dumbbell'},
    {timerName: 'Chilling timers', timerIcon: 'fa-couch'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
