import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({ providedIn: 'root' })
export class ServiceWorkerService {
  constructor(private serviceSwUpdate: SwUpdate) {
    this.serviceSwUpdate.available.subscribe(evt => window.location.reload());
  }
}
