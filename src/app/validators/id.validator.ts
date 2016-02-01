import {Control} from 'angular2/common';
import {ValidationResult} from './validation-result';
import {CarService} from '../services/car-service';

export class IdValidator {

  static uniqueId(carService: CarService) {

    var result = (control: Control): Promise<ValidationResult> => {
      return new Promise((resolve, reject) => {

        // simulating a slow async call
        setTimeout(() => {

          var idAlreadyTaken = carService.getCars().some(car => car.driver && car.driver.id === control.value)

          if (control.value === 'MS') {
            resolve({'uniqueId': true});
          } else {
            resolve(null);
          }
        }, 1000)
      });
    };

    return result;

  }
}
