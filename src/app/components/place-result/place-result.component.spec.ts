import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceResultComponent } from './place-result.component';

describe('PlaceResultComponent', () => {
  let component: PlaceResultComponent;
  let fixture: ComponentFixture<PlaceResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
