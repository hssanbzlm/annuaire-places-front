import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../Interfaces/category';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryDataService {
  private url = `${environment.baseUrl}/category`;
  constructor(private http: HttpClient) {}
  getCategories(): Observable<{ data: Category[] }> {
    return this.http.get<{ data: Category[] }>(this.url).pipe(first());
  }

  addCategory(category: Category): Observable<{ data: Category }> {
    return this.http
      .post<{ data: Category }>(`${this.url}/add`, category)
      .pipe(first());
  }

  updateCategory(category: Category): Observable<{ data: Category }> {
    return this.http
      .put<{ data: Category }>(`${this.url}/update`, category)
      .pipe(first());
  }

  removeCategory(category: Category): Observable<{ data: Category }> {
    return this.http
      .delete<{ data: Category }>(`${this.url}/remove`, {
        body: category,
      })
      .pipe(first());
  }
}
