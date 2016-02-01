import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Car} from '../models/car'
import {Driver} from '../models/driver'

@Injectable()
export class CarService {

  private cars: Car[];

  constructor() {
    this.cars = [
      new Car('ng-car1'),
      new Car('ng-car2')
    ];
  }

  changeDriver(driver: Driver, forCarId:string) {
    var car = this.cars.find(c => c.id == forCarId);
    car.driver = driver;
  }

  getCars(): Car[] {
    return this.cars;
  }
}
