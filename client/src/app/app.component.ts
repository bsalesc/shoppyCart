import { Component } from '@angular/core';
import { ServiceWorkerService } from './services/service-worker.service';
import { Router } from '@angular/router';
import { HttpService } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  constructor(
    private serviceWorker: ServiceWorkerService,
    private httpService: HttpService,
    private router: Router,
  ) {
    this.httpService.redirectToLogin.subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
