import { ComponentWithBackReference } from './ComponentWithBackReference'

export class Prototype {
	primitive: number;
	component: Date;
	circularReference: ComponentWithBackReference;

	clone(): this {
		const clone = Object.create(this);

		clone.component = Object.create(this.component); // Create a new Date object for the component property

		clone.circularReference = new ComponentWithBackReference(clone); // Create a new back reference to the clone

		return clone;
	}
}