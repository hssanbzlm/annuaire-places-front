import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${environment.baseUrl}/auth/signin`;

  constructor(private http: HttpClient) {}

  signin(data: User) {
    return this.http.post<{ token: string }>(this.url, data).pipe(first());
  }

  getIsAuthenticated() {
    return localStorage.getItem('jwt-annuaire-places');
  }
}
