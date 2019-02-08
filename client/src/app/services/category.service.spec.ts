import { TestBed, inject } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { HttpService } from '../utils';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subject, of } from 'rxjs';
import { Category } from '../interfaces';

describe('CategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CategoryService], imports: [HttpClientModule] });
  });

  it('should be created', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));
});

const mockCategory: Category = {
  description: 'Item',
  id: '789979797',
};

export class MockCategoryService extends CategoryService {
  get categories() {
    const subject = new Subject<Category[]>();
    this.getAll().subscribe(values => subject.next(values));
    return subject;
  }

  getAll = () => of<Category[]>([mockCategory]);

  getById = id => of<Category[]>([{ ...mockCategory, id }]);

  add = (category: Category) => of<Category>(category);

  edit = (category: Category) => of<Category>(category);

  remove = (category: Category) => of().subscribe();
}
