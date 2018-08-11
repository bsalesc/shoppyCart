import { Component, Input } from '@angular/core';
import { TypeMessage } from '../../interfaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() message: string;
  @Input() type: TypeMessage;

  constructor() {}
}
