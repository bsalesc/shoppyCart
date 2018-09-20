import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent, SideNavComponent],
  exports: [ModalComponent, SideNavComponent],
})
export class SharedModule {}
