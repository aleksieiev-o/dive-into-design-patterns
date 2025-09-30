import { IBuilder } from '../interfaces/IBuilder'
import { Castle } from '../products/Castle'

// TODO Value for the class fields in the methods must be received as arguments from the client code
export class CasteBuilder implements IBuilder {
	private result: Castle;
	
	constructor() {
		this.reset();
	}
	buildHall: () => void
	
	getResult(): Castle {
		return this.result;
	}
	reset() {
		this.result = new Castle();
	}
	buildTower(): void {
		this.result.towers = 3; // Castle-specific feature
	}
	buildBasement(): void {
		this.result.basement = true;
	}
	buildWalls(): void {
		this.result.walls = 7;
	}
	buildRoof(): void {
		this.result.roof = true;
	}
	buildWindows(): void {
		this.result.windows = 5;
	}
	buildDoors(): void {
		this.result.doors = 3;
	}
}