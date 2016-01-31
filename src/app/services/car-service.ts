import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import Car from '../models/car'

@Injectable()
export default class CarService {

  private cars: Car[];

  constructor() {
    this.cars = [
      new Car('ng-car 1.0'),
      new Car('ng-car 2.0')
    ];
  }

  getCars(): Car[] {
    return this.cars;
  }
}
