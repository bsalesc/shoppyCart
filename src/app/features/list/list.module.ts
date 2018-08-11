import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { NewModule } from '../new/new.module';

@NgModule({
  imports: [CommonModule, FormsModule, NewModule],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule {}
