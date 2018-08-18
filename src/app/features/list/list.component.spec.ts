import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { NewModule } from '../new/new.module';
import { WishService } from '../../services/wish.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { AgreementComponent } from './agreement.component';
import { SharedModule } from '../../components/shared.module';
import { EditModule } from '../edit/edit.module';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        NewModule,
        SharedModule,
        EditModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
      ],
      declarations: [ListComponent, AgreementComponent],
      providers: [WishService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
