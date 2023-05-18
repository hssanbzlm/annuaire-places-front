import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { LatestListingComponent } from './pages/latest-listing/latest-listing.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { ListingCardComponent } from './components/listing-card/listing-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CountryListComponent,
    LatestListingComponent,
    WelcomeComponent,
    CountryCardComponent,
    ListingCardComponent,
    SearchBarComponent,
    CategoryCardComponent,
    CategoryListComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    AppRoutingModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
