import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { PlacesComponent } from './pages/places/places.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { authenticationGuard, isLoggedGuard } from './Guard/AuthGuard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'auth',
        component: SigninComponent,
        canActivate: [isLoggedGuard()],
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [authenticationGuard()],
        children: [
          { path: '', component: DashboardComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'countries', component: CountriesComponent },
          { path: 'places', component: PlacesComponent },
          { path: 'categories', component: CategoriesComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
