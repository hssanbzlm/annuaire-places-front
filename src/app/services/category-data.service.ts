import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/Interfaces/category';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryDataService {
  private url = `${environment.baseUrl}/category`;
  private headers = new HttpHeaders().set(
    'Authorization',
    `Bearer ${localStorage.getItem('jwt-annuaire-places')}`
  );
  constructor(private http: HttpClient) {}

  getCategories(): Observable<{ data: Category[] }> {
    return this.http.get<{ data: Category[] }>(this.url).pipe(first());
  }

  addCategory(category: Category): Observable<{ data: Category }> {
    return this.http
      .post<{ data: Category }>(`${this.url}/add`, category, {
        headers: this.headers,
      })
      .pipe(first());
  }

  updateCategory(category: Category): Observable<{ data: Category }> {
    return this.http
      .put<{ data: Category }>(`${this.url}/update`, category, {
        headers: this.headers,
      })
      .pipe(first());
  }

  removeCategory(category: Category): Observable<{ data: Category }> {
    return this.http
      .delete<{ data: Category }>(`${this.url}/remove`, {
        headers: this.headers,
        body: category,
      })
      .pipe(first());
  }
}
