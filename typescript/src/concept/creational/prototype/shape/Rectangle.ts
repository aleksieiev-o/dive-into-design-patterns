import { Shape } from './Shape'

export class Rectangle extends Shape {
	width: number;
	height: number;
	color: string;
	borderWidth: number;

	clone(): Shape {
		return Object.create(this);
	}
}