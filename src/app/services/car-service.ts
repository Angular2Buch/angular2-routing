import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Car} from '../models/car'
import {Driver} from '../models/driver'

@Injectable()
export class CarService {

  private cars: Car[];

  constructor() {
    this.cars = [new Car('ng-car1'), new Car('ng-car2')];
    this.cars[0].driver = new Driver('MS', 'Nico', 'Rossberg', '27.07.1985', 'Formel 1');
  }

  changeDriver(driver: Driver, forCarId:string) {
    var car = this.getCar(forCarId);
    car.driver = driver;
  }

  getCars(): Car[] {
    return this.cars;
  }

  getCar(carId: string): Car {
    return this.cars.find(c => c.id == carId);
  }
}
