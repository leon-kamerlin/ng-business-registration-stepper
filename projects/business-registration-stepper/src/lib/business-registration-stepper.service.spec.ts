import { TestBed } from '@angular/core/testing';

import { BusinessRegistrationStepperService } from './business-registration-stepper.service';

describe('BusinessRegistrationStepperService', () => {
  let service: BusinessRegistrationStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessRegistrationStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
