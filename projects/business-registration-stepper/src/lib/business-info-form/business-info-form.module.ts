import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessInfoFormComponent } from './business-info-form.component';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { FieldRequiredModule } from 'leon-angular-utils';


@NgModule({
    declarations: [BusinessInfoFormComponent],
    imports: [
        CommonModule,
        FlexModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        FieldRequiredModule,
        MatInputModule,
        MatGoogleMapsAutocompleteModule,
        MatButtonModule,
        FieldRequiredModule
    ],
    exports: [BusinessInfoFormComponent]
})
export class BusinessInfoFormModule {
}
