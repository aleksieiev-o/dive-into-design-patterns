import { IBuilder } from '../interfaces/IBuilder'
import { Hotel } from '../products/Hotel'

// TODO Value for the class fields in the methods must be received as arguments from the client code
export class HotelBuilder implements IBuilder {
	private result: Hotel;

	constructor() {
    this.reset();
  }
	buildTower: () => void
	
	getResult(): Hotel {
		return this.result;
	}
	reset() {
		this.result = new Hotel();
	}
	buildHall(): void {
		this.result.hall = true; // Hotel-specific feature
	}
	buildBasement(): void {
		this.result.basement = true;
	}
	buildWalls(): void {
		this.result.walls = 10;
	}
	buildRoof(): void {
		this.result.roof = true;
	}
	buildWindows(): void {
		this.result.windows = 4;
	}
	buildDoors(): void {
		this.result.doors = 1;
	}
}