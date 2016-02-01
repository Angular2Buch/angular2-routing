import {Driver} from './driver';

export class Car {

  id: string;
  driver: Driver;
  tankCapacity: number = 100;
  hasDamage: boolean = false;

  constructor(id: string) {
    this.id = id;

    var noDriver =  new Driver('', 'kein', 'Fahrer', '', '');
    this.driver = noDriver;
    setInterval(() => this.reduceTankCapacity(), 1000);
  }

  reduceTankCapacity() {
    var newCapacity = this.tankCapacity - Math.floor(Math.random() * 10);
    this.tankCapacity = newCapacity > 0 ? newCapacity : 0;
  }

  refillTank(oil) {
    this.tankCapacity = this.tankCapacity + oil;
  }
}
