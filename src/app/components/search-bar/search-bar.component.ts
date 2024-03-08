import { Component, TemplateRef, ViewChild } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { selectCountriesName } from 'src/app/Store/country/countries.selectors';
import { selectCategoriesName } from 'src/app/Store/category/categories.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store';
import { PlaceDataService } from 'src/app/services/place-data.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from 'src/app/shared/components/basic-modal/basic-modal.component';
import { Place } from 'src/app/Interfaces/place';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  private modalRef!: NgbModalRef;
  @ViewChild('searchResultModal', { read: TemplateRef })
  searchResultModal!: TemplateRef<BasicModalComponent>;
  faMagnifyingGlass = faMagnifyingGlass;
  countries$!: Observable<string[]>;
  categories$!: Observable<string[]>;
  selectedCountry = '';
  selectedCategory = '';
  description = '';
  placesResult$!: Observable<Place[]>;
  constructor(
    private store: Store<AppState>,
    private placeService: PlaceDataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.countries$ = this.store.select(selectCountriesName);
    this.categories$ = this.store.select(selectCategoriesName);
  }

  search() {
    this.modalRef = this.modalService.open(this.searchResultModal, {
      size: 'lg',
      centered: true,
    });
    this.placesResult$ = this.placeService.getPlacesByCriteria(
      this.selectedCountry,
      this.description,
      this.selectedCategory
    );
  }

  closeModal() {
    this.modalRef.close();
  }
}
