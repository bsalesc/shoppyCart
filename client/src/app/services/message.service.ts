import { Injectable } from '@angular/core';
import { Message, TypeMessage } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];

  constructor() {}

  show = (
    description: string,
    type: TypeMessage = TypeMessage.SUCCESS,
    autoHide: boolean = true,
  ): void => {
    const message: Message = {
      description,
      type,
    };
    this.messages.push(message);

    if (autoHide) setTimeout(this.hide, 4000, message);
  };

  hide = (message: Message): void => {
    this.messages.splice(this.messages.indexOf(message), 1);
  };
}
