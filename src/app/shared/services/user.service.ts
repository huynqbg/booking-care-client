import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '@core/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
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
}
