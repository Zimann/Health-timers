
export interface NotificationBody {
  to: string,
  notification: {
    title: string
  },
  priority: string
}

export enum PriorityType {
  HIGH = 'high'
}
