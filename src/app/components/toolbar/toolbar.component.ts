import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  item = null;
  name = '';
  constructor(public service: AuthService) {}

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    var user = await JSON.parse(localStorage.getItem('currentUser'));

    this.item = user;
    console.log(this.item);
    this.name = user.name;
  }
}
