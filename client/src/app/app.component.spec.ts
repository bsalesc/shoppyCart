import { APP_BASE_HREF } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AppComponent } from 'src/app/app.component';
import { RouterModule } from 'src/app/router/router.module';
import { ItemService } from './services/item.service';
import { MessageService } from './services/message.service';
import { MessageComponent } from './components/message/message.component';
import { ServiceWorkerService } from './services/service-worker.service';
import { Subject } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

class MockSwUpdate {
  $$availableSubj = new Subject<{ available: { hash: string } }>();
  $$activatedSubj = new Subject<{ current: { hash: string } }>();

  available = this.$$availableSubj.asObservable();
  activated = this.$$activatedSubj.asObservable();

  activateUpdate = jasmine
    .createSpy('MockSwUpdate.activateUpdate')
    .and.callFake(() => Promise.resolve());

  checkForUpdate = jasmine
    .createSpy('MockSwUpdate.checkForUpdate')
    .and.callFake(() => Promise.resolve());

  constructor(public isEnabled: boolean) {}
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MessageComponent,
      ],
      imports: [BrowserModule, RouterModule, HttpClientModule],
      providers: [
        ItemService,
        MessageService,
        ServiceWorkerService,
        {
          provide: SwUpdate,
          useFactory: () => new MockSwUpdate(false),
        },
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
