import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { NewModule } from '../new/new.module';
import { MessageModule } from '../../shared/message/message.module';

@NgModule({
  imports: [CommonModule, FormsModule, NewModule, MessageModule],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule {}
