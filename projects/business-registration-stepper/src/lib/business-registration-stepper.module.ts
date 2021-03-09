import { NgModule } from '@angular/core';
import { BusinessRegistrationStepperComponent } from './business-registration-stepper.component';
import { FieldRequiredModule } from 'leon-angular-utils';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { AvailabilityFormModule } from 'availability-form';
import { FlexModule } from '@angular/flex-layout';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { BusinessInfoFormModule } from './business-info-form/business-info-form.module';


@NgModule({
  declarations: [
    BusinessRegistrationStepperComponent
  ],
  imports: [
    FieldRequiredModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    FlexModule,
    AvailabilityFormModule,
    MatGoogleMapsAutocompleteModule,
    BusinessInfoFormModule,
  ],
  exports: [
    BusinessRegistrationStepperComponent
  ]
})
export class BusinessRegistrationStepperModule {
}
