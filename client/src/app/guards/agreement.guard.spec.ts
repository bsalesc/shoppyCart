import { TestBed, inject } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AgreementGuard } from './agreement.guard';

describe('AgreementGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgreementGuard, { provide: APP_BASE_HREF, useValue: '/' }],
      imports: [RouterModule.forRoot([])],
    });
  });

  it('should be created', inject(
    [AgreementGuard],
    (service: AgreementGuard) => {
      expect(service).toBeTruthy();
    },
  ));
});
