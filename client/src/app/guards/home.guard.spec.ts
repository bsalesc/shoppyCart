import { TestBed, inject } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeGuard } from './home.guard';
import { HttpClientModule } from '@angular/common/http';

describe('HomeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientModule],
      providers: [HomeGuard, { provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should be created', inject([HomeGuard], (service: HomeGuard) => {
    expect(service).toBeTruthy();
  }));
});
