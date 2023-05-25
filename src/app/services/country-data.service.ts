import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  OperatorFunction,
  debounceTime,
  distinctUntilChanged,
  first,
  map,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../Interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  private url = `${environment.baseUrl}/country`;
  private header = new HttpHeaders().set(
    'Authorization',
    `Bearer ${localStorage.getItem('jwt-annuaire-places')}`
  );
  constructor(private http: HttpClient) {}
  getCountries(): Observable<{ data: Country[] }> {
    return this.http.get<{ data: Country[] }>(this.url).pipe(first());
  }

  addCountry(country: Country): Observable<{ data: Country }> {
    return this.http
      .post<{ data: Country }>(`${this.url}/add`, country, {
        headers: this.header,
      })
      .pipe(first());
  }

  updateCountry(country: Country): Observable<{ data: Country }> {
    return this.http
      .put<{ data: Country }>(`${this.url}/update`, country, {
        headers: this.header,
      })
      .pipe(first());
  }

  removeCountry(country: Country): Observable<{ data: Country }> {
    return this.http
      .delete<{ data: Country }>(`${this.url}/remove`, {
        headers: this.header,
        body: country,
      })
      .pipe(first());
  }

  getCountryByName(term: string) {
    const countryApiUrl = `https://autocomplete.travelpayouts.com/places2?term=${term}&locale=en&types[]=country`;
    return this.http.get<any[]>(countryApiUrl).pipe(
      distinctUntilChanged(),
      debounceTime(200),
      map((data: any) => [...data.map((v: any) => v.name)])
    );
  }
}
