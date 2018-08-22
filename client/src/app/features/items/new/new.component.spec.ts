import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponent } from './new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from '../../../services/item.service';
import { HttpClientModule } from '@angular/common/http';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      declarations: [NewComponent],
      providers: [ItemService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
