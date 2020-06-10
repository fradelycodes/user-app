import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUser = '/user';
  listUsers = [];
  constructor(private http: Http) {}

  async getUsers() {
    try {
      //request
      await this.http.get(environment.baseUrl + this.apiUser).subscribe();
    } catch (err) {
      console.log(err);
    }
  }
}
