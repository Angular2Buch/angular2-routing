import { Component, View , Input, Output, EventEmitter } from 'angular2/core';
import Car from '../../models/car';

@Component({ selector: 'car' })
@View({
  templateUrl: 'app/components/car-component/car-component.html',
})
export default class CarComponent {
  @Input() model: Car;
  @Output() damaged: EventEmitter<Car> = new EventEmitter<Car>();

  stoneImpact() {
    this.model.hasDamage = true;
    this.damaged.next(this.model);
  }
}
