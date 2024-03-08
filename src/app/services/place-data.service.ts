import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Place } from '../Interfaces/place';

@Injectable({
  providedIn: 'root',
})
export class PlaceDataService {
  private url = `${environment.baseUrl}/place`;
  constructor(private http: HttpClient) {}
  private createHeader() {
    return new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('jwt-annuaire-places')}`
    );
  }
  getPlaces(): Observable<{ data: Place[] }> {
    return this.http.get<{ data: Place[] }>(this.url).pipe(first());
  }
  getPlacesByCriteria(
    country: string,
    description: string,
    category: string
  ): Observable<Place[]> {
    const header = this.createHeader();
    return this.http
      .get<Place[]>(
        `${this.url}/search?country=${country}&category=${category}&description=${description}`,
        { headers: header }
      )
      .pipe(first());
  }

  addPlace(place: Place): Observable<{ data: Place }> {
    const header = this.createHeader();
    return this.http
      .post<{ data: Place }>(`${this.url}/add`, place, { headers: header })
      .pipe(first());
  }
  removePlace(place: Place): Observable<{ data: Place }> {
    const header = this.createHeader();
    return this.http
      .delete<{ data: Place }>(`${this.url}/remove`, {
        body: place,
        headers: header,
      })
      .pipe(first());
  }
  updatePlace(place: Place): Observable<{ data: Place }> {
    const header = this.createHeader();
    return this.http
      .put<{ data: Place }>(`${this.url}/update`, place, {
        headers: header,
      })
      .pipe(first());
  }
}
