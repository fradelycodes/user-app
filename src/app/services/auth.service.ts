import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUser = '/users';
  listUsers = [];
  userName = 'Robyn Frami';
  password = 'zocmcUj27xs1b0Q';
  user = {};
  constructor(private http: Http) {}

  async getUsers() {
    try {
      //request
      await this.http
        .get(environment.baseUrl + this.apiUser)
        .subscribe((response) => {
          this.listUsers = response.json();
          this.login();
        });
    } catch (err) {
      console.log(err);
    }
  }
  //method
  login() {
    this.user = this.listUsers.find(
      (u) => u.name == this.userName && u.password === this.password
    );
    console.log(this.user);
  }
}
