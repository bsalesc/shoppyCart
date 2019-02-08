import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { NewModule } from '../new/new.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';
import { MockCategoryService } from 'src/app/services/category.service.spec';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NewModule, HttpClientModule],
      declarations: [ListComponent],
      providers: [{ provide: CategoryService, useClass: MockCategoryService }],
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
