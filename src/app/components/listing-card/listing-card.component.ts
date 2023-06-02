import { Component, Input } from '@angular/core';
import {
  faLocationDot,
  faCircleCheck,
  faPhoneFlip,
  faUtensils,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import { Place } from 'src/app/Interfaces/place';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.css'],
})
export class ListingCardComponent {
  faCircleCheck = faCircleCheck;
  faLocationDot = faLocationDot;
  faPhoneFlip = faPhoneFlip;
  faUtensils = faUtensils;
  faUserTie = faUserTie;

  @Input() place!: Place;
}
