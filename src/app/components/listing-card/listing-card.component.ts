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

  getBackGround() {
    return `background: url(${
      this.place.images[0]
        ? this.place.images[0]
        : 'https://res.cloudinary.com/dodm50cbx/image/upload/v1710060991/annuaire-places/iel3ff1cjvexacoy40ff.jpg'
    })`;
  }
}
