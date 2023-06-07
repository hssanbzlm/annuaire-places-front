export type continentType =
  | 'Europe'
  | 'Asia'
  | 'Africa'
  | 'America'
  | 'Oceania'
  | 'Antarctica';

export interface Country {
  _id: string;
  name: string;
  continent: continentType;
  description: string;
}
