import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {DateValidator} from '../../validators/date.validator'
import {IdValidator} from '../../validators/id.validator'
import {Driver} from '../../models/driver';
import {CarService} from '../../services/car-service';

@Component({
  selector: 'driver-form',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/components/driver-form/driver-form.html',
  styleUrls:  ['app/components/driver-form/driver-form.css'],
})
export class DriverForm {
  driverForm: ControlGroup;
  types = ['Formel 1', 'Stock Car Rennen', 'Rallye', 'Kartsport'];
  driver: Driver;
  submitted = false;
  forCarId: string;

  constructor(private fb: FormBuilder, private routeParams: RouteParams, private carService: CarService) {

    this.forCarId = routeParams.get('forCarId');
    this.driver = carService.getCar(this.forCarId).driver || new Driver('', '', '', '')

    this.driverForm = fb.group({
      id:        ['', Validators.required, IdValidator.uniqueId],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      lastName:  ['', Validators.required],
      birthdate: ['', DateValidator.germanDate],
      type:      ['', Validators.required]
    });
  }

  onSubmit() {
    this.carService.changeDriver(this.driver, this.forCarId);
    this.submitted = true;
  }
}
