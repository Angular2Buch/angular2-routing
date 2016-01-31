import { Component, View } from 'angular2/core';

import CarComponent from './components/car-component/car-component';
import Car from './models/car';
import GasService from './services/gas-service';

@Component({
  selector: 'dashboard-app'
})
@View({
  directives: [CarComponent],
  templateUrl: 'app/dashboard-app.tpl.html'
})
export class DashboardApp {
  cars: Array<Car>;
  totalDamages: number = 0;
  bestPrice: number = 0;

  constructor(private gasService: GasService) {
    this.cars = [
      new Car('ng-car 1.0'),
      new Car('ng-car 2.0')]
  }

  refillTank(car: Car, amountOfMoneyToSpend: number) {

    this.gasService
      .getBestPrice()
      .subscribe((bestPrice: number) => {

        this.bestPrice = bestPrice;
        car.refillTank(amountOfMoneyToSpend / bestPrice);
      },
      err => console.error(err));
  }

  notifyCarDamaged() {
    this.totalDamages++;
  }
}
