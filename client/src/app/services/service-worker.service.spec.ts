import { TestBed, inject } from '@angular/core/testing';

import { ServiceWorkerService } from './service-worker.service';
import { ServiceWorkerModule } from '@angular/service-worker';

describe('ServiceWorkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServiceWorkerModule.register('', { enabled: false })],
      providers: [ServiceWorkerService],
    });
  });

  it('should be created', inject(
    [ServiceWorkerService],
    (service: ServiceWorkerService) => {
      expect(service).toBeTruthy();
    },
  ));
});
