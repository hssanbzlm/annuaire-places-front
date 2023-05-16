import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PopularComponent } from './pages/popular/popular.component';
import { LatestComponent } from './pages/latest/latest.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { ListingCardComponent } from './components/listing-card/listing-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoriesComponent } from './pages/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopularComponent,
    LatestComponent,
    WelcomeComponent,
    CountryCardComponent,
    ListingCardComponent,
    SearchBarComponent,
    CategoryCardComponent,
    CategoriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
