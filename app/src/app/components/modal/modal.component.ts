import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  visible: boolean = false;

  @Input()
  title: string;

  @Input()
  primaryButtonText: string;
  @Input()
  secondaryButtonText: string;
  @Output()
  primaryButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  secondaryButtonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  show = () => (this.visible = true);
  hide = () => (this.visible = false);

  handleClose = (handleFn: EventEmitter<void>) => {
    this.hide();
    handleFn.emit();
  };

  handlePrimaryButton = () => this.handleClose(this.primaryButtonClick);
  handleSecondaryButton = () => this.handleClose(this.secondaryButtonClick);
}
