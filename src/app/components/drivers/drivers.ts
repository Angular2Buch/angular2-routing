import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterOutlet, RouteConfig} from 'angular2/router';
import {DriverForm} from '../driver-form/driver-form';
import {DriverDetails} from '../driver-details/driver-details';

@Component({
  selector: 'drivers'
})
@View({
  directives: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
@RouteConfig([
  { path: '/details/:forCarId', as: 'Details', component: DriverDetails },
  { path: '/create/:forCarId',  as: 'Create', component: DriverForm }
])
export class Drivers {}
