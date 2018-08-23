import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { NewModule } from '../new/new.module';
import { UserService } from '../../../services/user.service';
import { SharedModule } from '../../../components/shared.module';
import { EditModule } from '../edit/edit.module';

@NgModule({
  imports: [CommonModule, FormsModule, NewModule, SharedModule, EditModule],
  declarations: [ListComponent],
  providers: [UserService],
  exports: [ListComponent],
})
export class ListModule {}
