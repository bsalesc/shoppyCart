import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private visible: boolean = false;

  @Input()
  private title: string;

  @Input()
  private primaryButtonText: string;
  @Input()
  private secondaryButtonText: string;
  @Output()
  private primaryButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  private secondaryButtonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  show = () => (this.visible = true);
  hide = () => (this.visible = false);

  private handleClose = (handleFn: EventEmitter<void>) => {
    this.hide();
    handleFn.emit();
  };

  private handlePrimaryButton = () => this.handleClose(this.primaryButtonClick);
  private handleSecondaryButton = () =>
    this.handleClose(this.secondaryButtonClick);
}
