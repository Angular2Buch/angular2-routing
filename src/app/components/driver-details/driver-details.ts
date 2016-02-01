import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Driver} from '../../models/driver';
import {CarService} from '../../services/car-service';

@Component({
  selector: 'driver-details',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/components/driver-details/driver-details.html',
  styleUrls:  ['app/components/driver-details/driver-details.css'],
})
export class DriverDetails {
  private driver: Driver;
  private forCarId: string;

  constructor(private routeParams: RouteParams, private carService: CarService) {
    this.forCarId = routeParams.get('forCarId');
    var car = carService.getCar(this.forCarId);
    this.driver = car.driver;
  }
}
