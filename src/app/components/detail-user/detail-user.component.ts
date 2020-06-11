import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css'],
})
export class DetailUserComponent implements OnInit {
  user: {
    name: '';
    roles: '';
    passowrd: '';
    avatar: '';
  };
  id;

  constructor(
    private serviceUser: UserService,
    private _ActivedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._ActivedRoute.snapshot.paramMap.get('id');
    this.serviceUser.getUserById(this.id).subscribe((response) => {
      this.user = response.json();
    });
  }
  updated() {
    this.serviceUser.updateUser(this.user).subscribe((response) => {
      console.log(response.json());
    });
  }
}
