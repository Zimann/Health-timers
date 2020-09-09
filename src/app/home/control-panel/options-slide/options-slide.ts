import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-options-slide',
  templateUrl: './options-slide.component.html',
  styleUrls: ['./options-slide.component.scss']
})
export class OptionsSlideComponent implements OnInit {

  @Input() slideIn: boolean;
  @Output() slideOutEmitter = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
