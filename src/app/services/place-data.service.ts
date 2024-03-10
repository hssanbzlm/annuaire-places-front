import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Place } from 'src/app/Interfaces/place';

@Injectable({
  providedIn: 'root',
})
export class PlaceDataService {
  private url = `${environment.baseUrl}/place`;
  private headers = new HttpHeaders().set(
    'Authorization',
    `Bearer ${localStorage.getItem('jwt-annuaire-places')}`
  );
  constructor(private http: HttpClient) {}
  getPlaces(): Observable<{ data: Place[] }> {
    return this.http.get<{ data: Place[] }>(this.url).pipe(first());
  }
  getPlacesByCriteria(
    country: string,
    description: string,
    category: string
  ): Observable<Place[]> {
    return this.http
      .get<Place[]>(
        `${this.url}/search?country=${country}&category=${category}&description=${description}`,
        { headers: this.headers }
      )
      .pipe(first());
  }

  addPlace(place: Place): Observable<{ data: Place }> {
    return this.http
      .post<{ data: Place }>(`${this.url}/add`, place, {
        headers: this.headers,
      })
      .pipe(first());
  }
  removePlace(place: Place): Observable<{ data: Place }> {
    return this.http
      .delete<{ data: Place }>(`${this.url}/remove`, {
        body: place,
        headers: this.headers,
      })
      .pipe(first());
  }
  updatePlace(place: Place): Observable<{ data: Place }> {
    return this.http
      .put<{ data: Place }>(`${this.url}/update`, place, {
        headers: this.headers,
      })
      .pipe(first());
  }
}
