import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  listUsers = [];
  userName = '';
  password = '';
  user = {};
  isValidUser = false;
  isValidPass = false;
  isValidateUser = false;
  isLogout = false;

  constructor(private router: Router) {}

  getUsers() {
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
  }

  login() {
    if (this.userName == '' && this.password == '') {
      this.isValidPass = true;
      this.isValidUser = true;
      return;
    }
    var user = this.listUsers.find(
      (u) => u.userName == this.userName && u.password == this.password
    );
    //aqui estamos verificando si el password y el username son correctos
    console.log(user);
    if (!user) {
      this.isValidateUser = true;
      return;
    }

    //esta linea se almacena el usuario entonctrado
    localStorage.setItem('currentUser', JSON.stringify(user));
    //aqui se obtiene el usuario
    var currentUser = JSON.parse(
      JSON.stringify(localStorage.getItem('currentUser').toString())
    );
    console.log(currentUser);
    this.isLogout = true;
    this.router.navigate(['/home']);
  }

  validateUser() {
    var currentUser = JSON.parse(
      JSON.stringify(localStorage.getItem('currentUser').toString())
    );
    if (currentUser) {
      this.isLogout = true;
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/']);
    }
  }
  logout() {
    //aqui vamos a destruir el objecto almacenado
    this.isLogout = false;
    localStorage.removeItem('currentUser');
    //aqui vamos a ir de nuevo a nuestro login
    this.router.navigate(['/']);
  }
}
