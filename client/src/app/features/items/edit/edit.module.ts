import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from '../../../services/item.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [EditComponent],
  providers: [ItemService],
  exports: [EditComponent],
})
export class EditModule {}
