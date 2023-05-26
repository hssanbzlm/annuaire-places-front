import { Category } from './category';
import { Country } from './country';

export interface Place {
  _id: string;
  name: string;
  country: Country;
  city: string;
  category: Category;
  description: string;
  phone: string;
  dateAdded: Date;
}
