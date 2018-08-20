import { TestBed, inject } from '@angular/core/testing';

import { WishService } from './wish.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

describe('WishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
      ],
      providers: [WishService]
    });
  });

  it('should be created', inject([WishService], (service: WishService) => {
    expect(service).toBeTruthy();
  }));
});
