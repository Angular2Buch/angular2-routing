import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {DashboardApp} from './app/dashboard-app';
import GasService from './app/services/gas-service';
import CarService from './app/services/car-service';

bootstrap(DashboardApp, [HTTP_PROVIDERS, ROUTER_PROVIDERS, GasService, CarService]);
