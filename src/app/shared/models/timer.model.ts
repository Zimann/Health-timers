export interface TimerTitle {
  timerName: string;
  timerIcon: string
}

export interface Timer {
  hours: number;
  minutes: number;
  timerType: string;
}

export interface CountDownTimer extends Timer {
  leftTime: number;
  format: string;
}

export interface Countdown {
  leftTime: number;
  format: string;
}

export enum HourConversionUnits {
  HOUR_TO_SECONDS = 3600,
  MINUTE_TO_SECONDS = 60
}
