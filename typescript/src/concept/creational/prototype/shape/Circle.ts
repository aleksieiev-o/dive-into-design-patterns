import { Shape } from './Shape'

export class Circle extends Shape {
	radius: number;

	clone(): Shape {
		return Object.create(this);
	}
}