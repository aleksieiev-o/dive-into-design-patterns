import { ComponentWithBackReference } from './concept/creational/prototype/prototype-concept/ComponentWithBackReference'
import { Prototype } from './concept/creational/prototype/prototype-concept/Prototype'
import { Circle } from './concept/creational/prototype/shape/Circle'
import { Rectangle } from './concept/creational/prototype/shape/Rectangle'
import { Shape } from './concept/creational/prototype/shape/Shape'

class PrototypeClient {
	private shapeList: Shape[] = [];

	constructor() {
		const rectangleOne = new Rectangle();
		const circleOne = new Circle();

		const rectangleTwo = rectangleOne.clone();
		const circleTwo = circleOne.clone();

		this.addToShapeList(rectangleOne);
		this.addToShapeList(circleOne);
		this.addToShapeList(rectangleTwo);
		this.addToShapeList(circleTwo);
	}

	addToShapeList(shape: Shape): void {
		this.shapeList.push(shape);
	}

	getShapeList(): Shape[] {
		return this.shapeList;
	}
}

const clientCode = () => {
	const p = new Prototype();
	p.primitive = 123;
	p.component = new Date();
	const c = new ComponentWithBackReference(p);

	const pCloned = p.clone();

	// Output:
	console.log(p.primitive === pCloned.primitive); // true
	console.log(p.component === pCloned.component); // true
	console.log(p.circularReference === pCloned.circularReference); // true
	console.log(p.circularReference.prototype === pCloned.circularReference.prototype); // true	
}

clientCode();