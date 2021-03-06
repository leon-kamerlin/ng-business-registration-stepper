import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRegistrationStepperComponent } from './business-registration-stepper.component';

describe('BusinessRegistrationStepperComponent', () => {
  let component: BusinessRegistrationStepperComponent;
  let fixture: ComponentFixture<BusinessRegistrationStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessRegistrationStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessRegistrationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
