import { Component, Input } from '@angular/core';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/Interfaces/category';
@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent {
  faShop = faShop;

  @Input() category!: Category;
}
