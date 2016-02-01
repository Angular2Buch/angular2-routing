import {Component, View , Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Car} from '../../models/car';

@Component({ selector: 'car' })
@View({
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/components/car-component/car-component.html',
})
export class CarComponent {
  @Input() model: Car;
  @Output() damaged: EventEmitter<Car> = new EventEmitter<Car>();

  stoneImpact() {
    this.model.hasDamage = true;
    this.damaged.next(this.model);
  }
}
