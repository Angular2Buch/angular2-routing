import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterOutlet, RouteConfig} from 'angular2/router';

import {Dashboard} from './components/dashboard/dashboard';
import {Drivers} from './components/drivers/drivers';

@RouteConfig([
    { path: '/dashboard', as: 'Dashboard', component: Dashboard, useAsDefault: true },
    { path: '/drivers/...', as: 'Drivers', component: Drivers }
])
@Component({
  selector: 'dashboard-app',
  templateUrl: 'app/dashboard-app.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DashboardApp { }
