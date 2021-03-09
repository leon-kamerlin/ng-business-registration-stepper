import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BusinessRegistrationStepperModule } from 'business-registration-stepper';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FullScreenWrapperModule } from 'ng-components-leon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BusinessRegistrationStepperModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    AgmCoreModule.forRoot(environment.places),
    FullScreenWrapperModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline'
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
