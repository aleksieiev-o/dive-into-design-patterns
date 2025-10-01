import { Prototype } from './Prototype'

export class ComponentWithBackReference {
	prototype: Prototype;

	constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}