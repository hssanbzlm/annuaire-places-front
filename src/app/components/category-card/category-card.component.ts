import { Component } from '@angular/core';
import { faShop } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent {
  faShop = faShop;
}
