import { TestBed, inject } from '@angular/core/testing';

import { WishService } from './wish.service';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

describe('WishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [WishService]
    });
  });

  it('should be created', inject([WishService], (service: WishService) => {
    expect(service).toBeTruthy();
  }));
});
