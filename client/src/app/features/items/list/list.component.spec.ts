import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { NewModule } from '../new/new.module';
import { WishService } from '../../../services/wish.service';
import { SharedModule } from '../../../components/shared.module';
import { EditModule } from '../edit/edit.module';
import { HttpClientModule } from '@angular/common/http';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        NewModule,
        SharedModule,
        EditModule,
        HttpClientModule,
      ],
      declarations: [ListComponent],
      providers: [WishService],
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
