import { TestBed, inject } from '@angular/core/testing';

import { ItemService } from './item.service';
import { HttpClientModule } from '@angular/common/http';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ItemService],
    });
  });

  it('should be created', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));
});
