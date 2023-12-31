import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '@core/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  handleLogin(email: string, password: string) {
    const body = {
      email,
      password,
    };
    return this.http.post(`${this.baseUrl}/api/login`, body);
  }

  handleLogout() {
    localStorage.removeItem('userInfo');
    this.router.navigate(['auth/login']);
  }

  public getAuthFromLocalStorage() {
    try {
      const userInfo = localStorage.getItem('userInfo');
      return userInfo ? JSON.parse(userInfo).user : null;
    } catch (error) {
      console.error(error);
    }
  }
}
