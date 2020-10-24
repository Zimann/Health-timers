export interface TimerColumn {
  timerName: TimerNames;
  timerIcon: TimerIcons
}

export interface Timer {
  hours: number;
  minutes: number;
  timerType: string;
}

export interface CustomTimer {
  hours: number;
  minutes: number;
  timerDescription: string;
}

export interface CountDownTimer extends Timer {
  leftTime: number;
}

export interface CustomCountDownTimer extends CustomTimer {
  leftTime: number;
}

export interface Countdown {
  leftTime: number;
}

export enum HourConversionUnits {
  HOUR_TO_SECONDS = 3600,
  MINUTE_TO_SECONDS = 60
}

export enum TimerIcons {
  RUNNING = 'fa-running',
  DUMBBELL = 'fa-dumbbell',
  COUCH = "fa-couch"
}

export enum TimerNames {
  STRETCHING = 'Stretching',
  WORKOUT = 'Workout',
  CHILLING = 'Chilling'
}

export enum AlarmTypes {
  REGULAR = 'regular',
  CUSTOM = 'custom'
}
