import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountriesComponent } from './pages/countries/countries.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PlacesComponent } from './pages/places/places.component';
import { BasicTableComponent } from './components/basic-table/basic-table.component';
import { BasicModalComponent } from './components/basic-modal/basic-modal.component';
import { ManageCategoryComponent } from './components/manage-category/manage-category.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageCountryComponent } from './components/manage-country/manage-country.component';
import { ManagePlaceComponent } from './components/manage-place/manage-place.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    CountriesComponent,
    CategoriesComponent,
    PlacesComponent,
    BasicTableComponent,
    BasicModalComponent,
    ManageCategoryComponent,
    ManageCountryComponent,
    ManagePlaceComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
