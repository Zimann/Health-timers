import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audioSrc: string = '../../assets/audio/timer-alarm.mp3';
  audio: HTMLAudioElement;

  constructor() { }

  playAudio() {
    this.audio = new Audio();
    this.audio.src = this.audioSrc;
    this.audio.load();
    this.audio.loop = true;
    this.audio.play();
  }
}
