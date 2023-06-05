import { Component, Input } from '@angular/core';
import { ListingsParCountry } from 'src/app/Interfaces/chart';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
})
export class CountryCardComponent {
  @Input() listingsParCountry!: ListingsParCountry;
}
