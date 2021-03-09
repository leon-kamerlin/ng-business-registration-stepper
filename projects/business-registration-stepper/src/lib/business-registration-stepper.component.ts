import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatHorizontalStepper, MatStep } from '@angular/material/stepper';
import { AvailabilityFormComponent, WeekAvailability } from 'ng-availability-form';
import { BusinessInfo } from './business-info';
import { Business } from './business';
import { BusinessInfoFormComponent } from './business-info-form/business-info-form.component';
import { DataDispatcher } from 'leon-angular-utils';

@Component({
    selector: 'lib-business-registration-stepper',
    templateUrl: './business-registration-stepper.component.html',
    styleUrls: ['./business-registration-stepper.component.scss']
})
export class BusinessRegistrationStepperComponent implements OnInit, AfterViewInit {
    private info: BusinessInfo;
    public availability: WeekAvailability;

    @ViewChild('stepper', { static: true })
    stepper: MatHorizontalStepper;

    @ViewChild('stepOne', { static: true })
    stepOne: MatStep;

    @ViewChild('stepTwo', { static: true })
    stepTwo: MatStep;

    @ViewChild('info', { static: true })
    businessInfoFormComponent: BusinessInfoFormComponent;

    @ViewChild('availability', { static: true })
    availabilityFormComponent: AvailabilityFormComponent;

    @Output()
    submitted: EventEmitter<Business> = new EventEmitter<Business>();


    @Input()
    formData: Business;


    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.stepOne.stepControl = this.businessInfoFormComponent.form;
        this.stepTwo.stepControl = this.availabilityFormComponent.form;
    }

    onSubmitBusinessInfo(info: BusinessInfo) {
        this.info = info;
        this.stepper.next();
    }

  onSubmitAvailability(availability: DataDispatcher<WeekAvailability>) {
        this.stepper.next();
        // this.availability = availability;
    }


    onDone() {
      /*  if (this.formData?.id) {
            this.submitted.emit({
                info: this.info,
                availability: this.availability,
                id: this.formData.id
            });
        } else {
            this.submitted.emit({
                info: this.info,
                availability: this.availability,
            });
        }*/
    }
}
