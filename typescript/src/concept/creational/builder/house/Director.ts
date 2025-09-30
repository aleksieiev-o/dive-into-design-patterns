import { IBuilder } from './interfaces/IBuilder'

export class Director {
	private builder: IBuilder;

	constructor(builder: IBuilder) {
    this.builder = builder;
  }

	getBuilder(): IBuilder {
		return this.builder;
	}

	buildHotel(): void {
		this.builder.reset();

		this.builder.buildBasement();
		this.builder.buildWalls();
		this.builder.buildHall(); // Hotel-specific feature
		this.builder.buildRoof();
		this.builder.buildWindows();
		this.builder.buildDoors();
	}

	buildCastle(): void {
		this.builder.reset();

		this.builder.buildBasement();
		this.builder.buildWalls();
		this.builder.buildTower(); // Castle-specific feature
		this.builder.buildWindows();
		this.builder.buildDoors();
		this.builder.buildRoof();
	}
}