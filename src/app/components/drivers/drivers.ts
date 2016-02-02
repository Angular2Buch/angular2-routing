import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {DriverForm} from '../driver-form/driver-form';
import {DriverDetails} from '../driver-details/driver-details';

@Component({})
@View({
  directives: [ROUTER_DIRECTIVES],
  template: '<router-outlet></router-outlet>'
})
@RouteConfig([
  { path: '/details/:forCarId', as: 'Details', component: DriverDetails },
  { path: '/create/:forCarId',  as: 'Create', component: DriverForm }
])
export class Drivers {}
