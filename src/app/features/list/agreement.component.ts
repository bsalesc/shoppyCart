import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {
  constructor(private _user: UserService) {}

  ngOnInit() {}

  set userAgreed(value: boolean) {
    this._user.userAgreed = value;
  }
}
