import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GermanAddress, MatSearchGoogleMapsAutocompleteComponent } from '@angular-material-extensions/google-maps-autocomplete';
import { businessType } from './index';
import { BusinessInfo } from '../business-info';

@Component({
    selector: 'lib-business-info-form',
    templateUrl: './business-info-form.component.html',
    styleUrls: ['./business-info-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BusinessInfoFormComponent implements OnInit, AfterViewInit, OnChanges {
    businessTypes = businessType;
    form: FormGroup;
    address: GermanAddress;

    @Input()
    submitText = 'Submit';

    @Input()
    showPreviousButton = true;

    @Input()
    info: BusinessInfo;

    @Output()
    formData: EventEmitter<BusinessInfo> = new EventEmitter<BusinessInfo>();

    @ViewChild('autocomplete', { static: true })
    autocomplete: MatSearchGoogleMapsAutocompleteComponent;


    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            type: this.fb.control(null, [
                Validators.required
            ]),
            name: this.fb.control(null, [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(30),
            ]),
            phoneNumber: this.fb.control(null, [
                Validators.pattern('^([0-9]+)$'),
                Validators.minLength(8),
                Validators.maxLength(10),
            ]),
        });
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        this.updateForm(changes?.info?.currentValue);
    }

    ngAfterViewInit() {
        this.form.addControl('address', this.autocomplete.addressFormGroup);
    }

    private updateForm(info: BusinessInfo) {
        this.type.setValue(info?.type);
        this.name.setValue(info?.name);
        this.phoneNumber.setValue(info?.phoneNumber);
    }

    get type(): FormControl {
        return this.form.get('type') as FormControl;
    }

    get name(): FormControl {
        return this.form.get('name') as FormControl;
    }

    get phoneNumber(): FormControl {
        return this.form.get('phoneNumber') as FormControl;
    }

    onSubmit({ type, name, phoneNumber }) {
        const data: BusinessInfo = {
            name,
            type,
            phoneNumber,
            geoLocation: null,
            // geoLocation: new firebase.firestore.GeoPoint(this.address.geoLocation.latitude, this.address.geoLocation.longitude),
            postalCode: this.address.postalCode,
            streetNumber: this.address.streetName,
            streetName: this.address.streetName,
            vicinity: this.address.vicinity,
            displayAddress: this.address.displayAddress
        };
        this.formData.emit(data);
    }

    onGermanAddressMapped(address: GermanAddress) {
        this.address = address;
    }


}
