import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import {DashboardApp} from './app/dashboard-app';
import GasService from './app/services/gas-service';

bootstrap(DashboardApp, [HTTP_PROVIDERS, GasService]);
