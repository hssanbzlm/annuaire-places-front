import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountriesComponent } from './pages/countries/countries.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PlacesComponent } from './pages/places/places.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    CountriesComponent,
    CategoriesComponent,
    PlacesComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FontAwesomeModule],
})
export class AdminModule {}
