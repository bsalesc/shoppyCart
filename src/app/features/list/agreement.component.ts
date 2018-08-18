import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ListComponent } from './list.component';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {
  constructor(@Inject(ListComponent) private parent: ListComponent) {}

  ngOnInit() {}

  agreed = () => (this.parent.userAgreed = true);
}
