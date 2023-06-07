import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${environment.baseUrl}/auth/signin`;

  constructor(private http: HttpClient, private router: Router) {}

  signin(data: User) {
    return this.http.post<{ token: string }>(this.url, data).pipe(first());
  }

  logout() {
    localStorage.removeItem('jwt-annuaire-places');
    this.router.navigateByUrl('admin/auth');
  }

  getIsAuthenticated() {
    return localStorage.getItem('jwt-annuaire-places');
  }
}
