import { Component, Input } from '@angular/core';
import { Place } from 'src/app/Interfaces/place';

@Component({
  selector: 'app-place-result',
  templateUrl: './place-result.component.html',
  styleUrls: ['./place-result.component.css'],
})
export class PlaceResultComponent {
  @Input() placeList!: Place[];
}
