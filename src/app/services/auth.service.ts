import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUser = '/users';
  listUsers = [];
  userName = '';
  password = '';
  user = {};
  isValidUser = false;
  isValidPass = false;
  constructor(private router: Router) {}

  async getUsers() {
    this.listUsers = [
      {
        name: 'Fradely Ventura',
        userName: 'fradelydventura@gmail.com',
        password: 12345,
        roles: 'user',
        avatar:
          'https://s3.amazonaws.com/uifaces/faces/twitter/nathalie_fs/128.jpg',
      },
      {
        name: 'Fradely Dilone',
        userName: 'fradely@hotmail.com',
        password: 12345678,
        roles: 'admin',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/SULiik/128.jpg',
      },
    ];

    // try {

    //   await this.http
    //     .get(environment.baseUrl + this.apiUser)
    //     .subscribe((response) => {
    //       this.listUsers = response.json();
    //       this.login();
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
  }
  //method
  login() {
    if (this.userName == '' && this.password == '') {
      this.isValidPass = true;
      this.isValidUser = true;
      return;
    }
    var user = this.listUsers.find(
      (u) => u.userName == this.userName && u.password === this.password
    );

    if (user) {
      return;
    }
    localStorage.setItem('currentUser', user);
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    this.router.navigate(['/home']);
  }

  validateUser() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);

    if (currentUser) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
