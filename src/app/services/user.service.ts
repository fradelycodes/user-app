import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUser = '/users';
  constructor(private http: Http) {}

  getUsersApi() {
    return this.http.get(environment.baseUrl + this.apiUser);
  }
  createUser(user) {
    return this.http.post(
      environment.baseUrl + this.apiUser,
      JSON.stringify(user)
    );
  }

  //user update
  updateUser(user) {
    return this.http.patch(
      environment.baseUrl + this.apiUser + '/' + user.id,
      JSON.stringify(user)
    );
  }

  getUserById(id) {
    return this.http.get(environment.baseUrl + this.apiUser + '/' + id);
  }
  //delete user
  deleteUser(id) {
    return this.http.delete(environment.baseUrl + this.apiUser + '/' + id);
  }
}
