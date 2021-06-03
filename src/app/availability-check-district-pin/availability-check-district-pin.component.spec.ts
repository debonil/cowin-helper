import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityCheckDistrictPinComponent } from './availability-check-district-pin.component';

describe('AvailabilityCheckDistrictPinComponent', () => {
  let component: AvailabilityCheckDistrictPinComponent;
  let fixture: ComponentFixture<AvailabilityCheckDistrictPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabilityCheckDistrictPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityCheckDistrictPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
