import {Injectable} from '@angular/core';
import {AlarmTypes} from '../shared/models/timer.model';

@Injectable()
export class AudioService {

  readonly audioSrc: string = 'assets/audio/timer-alarm.mp3';

  private audio: HTMLAudioElement;
  private alarms: HTMLAudioElement[] = [];
  private customAlarms: HTMLAudioElement[] = [];

  constructor() {
  }

  playAudio(alarmType: string) {
    this.audio = new Audio();
    this.audio.src = this.audioSrc;
    this.audio.load();
    this.audio.loop = true;
    this.audio.play();

    if (alarmType === AlarmTypes.REGULAR) {
      this.alarms.push(this.audio);

    } else {
      this.customAlarms.push(this.audio);
    }

  }

  stopAudio(alarmType) {
    if (alarmType === AlarmTypes.REGULAR) {
      this.alarms.forEach((alarmItem: HTMLAudioElement) => alarmItem.pause());
      this.alarms = [];
    } else {
      this.customAlarms.forEach((alarmItem: HTMLAudioElement) => alarmItem.pause());
      this.customAlarms = [];
    }
  }
}
