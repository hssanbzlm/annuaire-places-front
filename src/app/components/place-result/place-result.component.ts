import { Component, Input } from '@angular/core';
import { Place } from 'src/app/Interfaces/place';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-place-result',
  templateUrl: './place-result.component.html',
  styleUrls: ['./place-result.component.css'],
})
export class PlaceResultComponent {
  faPhone = faPhone;
  @Input() placeList!: Place[];
}
