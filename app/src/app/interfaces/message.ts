export class Message {
  description: string;
  type: TypeMessage;
}

export enum TypeMessage {
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info'
}
