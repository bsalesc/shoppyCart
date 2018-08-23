import { Component, Input } from '@angular/core';
import { TypeMessage, Message } from '../../interfaces';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  messages: Message[];

  constructor(private _messageService: MessageService) {
    this.messages = _messageService.messages;
  }
}
