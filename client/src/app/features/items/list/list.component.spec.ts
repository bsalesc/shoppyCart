import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { NewModule } from '../new/new.module';
import { ItemService } from '../../../services/item.service';
import { SharedModule } from '../../../components/shared.module';
import { EditModule } from '../edit/edit.module';
import { HttpClientModule } from '@angular/common/http';
import { MockItemService } from 'src/app/services/item.service.spec';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, NewModule, SharedModule, EditModule, HttpClientModule],
      declarations: [ListComponent],
      providers: [{ provide: ItemService, useClass: MockItemService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
