import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterOutlet, RouteConfig} from 'angular2/router';

import {DriverForm} from '../driver-form/driver-form';

@Component({
  selector: 'drivers'
})
@View({
  directives: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
@RouteConfig([
  //{ path: '/details/:isbn', as: 'Details', component: BookDetails },
  { path: '/create',  as: 'Create', component: DriverForm }
])
export class Drivers {}
