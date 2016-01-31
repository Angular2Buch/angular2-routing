import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import Station from '../models/Station';
import 'rxjs/add/operator/map';

@Injectable()
export default class CarService {

  constructor(private http: Http) {

  }

  getCars() {
    return
  }
}
