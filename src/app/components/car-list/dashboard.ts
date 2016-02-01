import { Component, View } from 'angular2/core';

import CarComponent from '../car-component/car-component';
import Car from '../../models/car';
import GasService from '../../services/gas-service';
import CarService from '../../services/car-service';

@Component({
  selector: 'car-list'
})
@View({
  directives: [CarComponent],
  templateUrl: 'app/dashboard-app.html'
})
export class CarList {
  cars: Car[];
  totalDamages: number = 0;
  bestPrice: number = 0;

  constructor(private gasService: GasService, private carService: CarService) {
    this.cars = carService.getCars();
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
