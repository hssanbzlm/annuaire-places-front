import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestListingComponent } from './latest-listing.component';

describe('LatestComponent', () => {
  let component: LatestListingComponent;
  let fixture: ComponentFixture<LatestListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestListingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LatestListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
