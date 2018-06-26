import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ListComponent],
  exports: [ListComponent],
  bootstrap: [ListComponent]
})
export class ListModule {}
