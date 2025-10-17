import { RoundPeg } from './RoundPeg'

export class RoundHole {
	constructor(private radius: number) {
		this.radius = radius;
	}

	getRadius(): number {
		return this.radius;
	}

	isFit(peg: RoundPeg): boolean {
		return this.radius >= peg.getRadius();
	}
}