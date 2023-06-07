import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  distinctUntilKeyChanged,
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
  constructor(private http: HttpClient) {}

  private createHeader() {
    return new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('jwt-annuaire-places')}`
    );
  }
  getCountries(): Observable<{ data: Country[] }> {
    return this.http.get<{ data: Country[] }>(this.url).pipe(first());
  }

  addCountry(country: Country): Observable<{ data: Country }> {
    const header = this.createHeader();
    return this.http
      .post<{ data: Country }>(`${this.url}/add`, country, {
        headers: header,
      })
      .pipe(first());
  }

  updateCountry(country: Country): Observable<{ data: Country }> {
    const header = this.createHeader();

    return this.http
      .put<{ data: Country }>(`${this.url}/update`, country, {
        headers: header,
      })
      .pipe(first());
  }

  removeCountry(country: Country): Observable<{ data: Country }> {
    const header = this.createHeader();

    return this.http
      .delete<{ data: Country }>(`${this.url}/remove`, {
        headers: header,
        body: country,
      })
      .pipe(first());
  }

  getCountryByName(term: string) {
    const countryApiUrl = `https://autocomplete.travelpayouts.com/places2?term=${term}&locale=en&types[]=country`;
    return this.http.get<any[]>(countryApiUrl).pipe(
      first(),
      debounceTime(200),
      map((data: any) => [...data.map((v: any) => v.name)])
    );
  }

  search(text$: Observable<string>) {
    let countries: string[] = [];
    return text$.pipe(
      map((term) => {
        if (term === '') {
          return countries;
        } else {
          this.getCountryByName(term).subscribe((data: string[]) => {
            countries = data;
          });
          return countries;
        }
      })
    );
  }
}
